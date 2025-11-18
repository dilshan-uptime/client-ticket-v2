import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks";
import { BrowserRouter, Route, Routes } from "react-router";

import { authActions } from "../redux/authSlice";
import { getAppLoading } from "../redux/appSlice";

import AppRoutes from "../routes";
import { roleTypes } from "@/constants/user-role";

import storage from "@/services/storage/local-storage";
import { AUTH_RESPONSE } from "@/constants/storage";

import { AppScroller } from "../component/ScrollToTop.component";
import type { AppRouteDto } from "@/models/common";
import type { UserRole } from "@/models/user-role";
import { NotFoundPage } from "../pages/NotFoundPage";
import type { AuthenticationResponse } from "@/models/auth";
import { PrivateRoute } from "@/shared/private-route/PrivateRoute.component";

import { Sidebar } from "@/components/layout/NavBar";

export const AppContainer = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getAppLoading);
  const isLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);

  const [sidebarOpen, setSidebarOpen] = useState(true); // control sidebar

  const userRole: UserRole = {
    roleId: roleTypes.CLIENT,
    roleName: roleTypes.CLIENT,
  };

  useEffect(() => {
    const authFromStorage: AuthenticationResponse | null =
      storage.get(AUTH_RESPONSE);

    if (authFromStorage) {
      dispatch(authActions.authenticateUserSuccess(authFromStorage));
    }
  }, []);

  const renderContainer = () => (
    <BrowserRouter>
      <AppScroller />

      {/* Sidebar */}
      {!isLoggedIn && (
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      )}

      {/* Main content */}
      <div
        className={`transition-all duration-300 ${
          !isLoggedIn
            ? sidebarOpen
              ? "ml-20"
              : "ml-0" // content full width when sidebar collapsed
            : "ml-0"
        } w-full p-0`}
      >
        <Routes>
          {AppRoutes(userRole).map(
            ({ isPrivate, component: Component, path }: AppRouteDto) =>
              isPrivate ? (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PrivateRoute>
                      <Component />
                    </PrivateRoute>
                  }
                />
              ) : (
                <Route key={path} path={path} element={<Component />} />
              )
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  return loading ? <>Loading...</> : <>{renderContainer()}</>;
};
