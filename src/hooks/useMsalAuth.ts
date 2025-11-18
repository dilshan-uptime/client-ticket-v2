import { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { useAppDispatch } from './store-hooks';
import { authActions } from '@/app/redux/authSlice';
import type { AuthenticationResponse } from '@/models/auth';
import { AUTH_RESPONSE } from '@/constants/storage';
import storage from '@/services/storage/local-storage';
import { loginRequest } from '@/config/authConfig';

export const useMsalAuth = () => {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const syncAuth = async () => {
      if (isAuthenticated && accounts.length > 0 && inProgress === 'none') {
        const account = accounts[0];
        
        try {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: account,
          });

          const nameParts = (account.name || account.username).split(' ');
          const authResponse: AuthenticationResponse = {
            token: response.accessToken,
            refreshToken: response.idToken,
            user: {
              id: account.localAccountId,
              email: account.username,
              firstName: nameParts[0] || account.username,
              lastName: nameParts.slice(1).join(' ') || '',
              roleCode: 'USER',
            },
          };

          storage.set(AUTH_RESPONSE, authResponse);
          dispatch(authActions.authenticateUserSuccess(authResponse));
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            try {
              const response = await instance.acquireTokenPopup(loginRequest);
              
              const nameParts = (account.name || account.username).split(' ');
              const authResponse: AuthenticationResponse = {
                token: response.accessToken,
                refreshToken: response.idToken,
                user: {
                  id: account.localAccountId,
                  email: account.username,
                  firstName: nameParts[0] || account.username,
                  lastName: nameParts.slice(1).join(' ') || '',
                  roleCode: 'USER',
                },
              };

              storage.set(AUTH_RESPONSE, authResponse);
              dispatch(authActions.authenticateUserSuccess(authResponse));
            } catch (popupError) {
              console.error('Interactive token acquisition failed:', popupError);
            }
          } else {
            console.error('Token acquisition failed:', error);
          }
        }
      }
    };

    syncAuth();
  }, [isAuthenticated, accounts, dispatch, inProgress, instance]);

  const logout = async () => {
    try {
      storage.remove(AUTH_RESPONSE);
      dispatch(authActions.logoutUser());
      
      await instance.logoutRedirect({
        postLogoutRedirectUri: window.location.origin,
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getAccessToken = async () => {
    if (accounts.length > 0) {
      try {
        const response = await instance.acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        });
        return response.accessToken;
      } catch (error) {
        console.error('Failed to acquire token:', error);
        try {
          const response = await instance.acquireTokenPopup(loginRequest);
          return response.accessToken;
        } catch (popupError) {
          console.error('Failed to acquire token via popup:', popupError);
          return null;
        }
      }
    }
    return null;
  };

  return {
    isAuthenticated,
    accounts,
    logout,
    instance,
    getAccessToken,
  };
};
