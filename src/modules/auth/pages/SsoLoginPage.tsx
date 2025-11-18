import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '@/config/authConfig';
import { Button } from '@/components/ui/button';
import { FaMicrosoft } from 'react-icons/fa';

export const SsoLoginPage = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#ee754e] to-[#d66540] items-center justify-center p-12">
        <div className="text-white max-w-md">
          <h1 className="text-5xl font-bold mb-6">uptime</h1>
          <h2 className="text-3xl font-semibold mb-4">
            Automating the Future of Ticket Management
          </h2>
          <p className="text-lg opacity-90">
            Empower your support teams with smart automation to resolve tickets faster and boost customer satisfaction.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#ee754e] mb-2 lg:hidden">uptime</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in with your Microsoft account to continue
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <Button
              onClick={handleLogin}
              className="w-full bg-[#ee754e] hover:bg-[#d66540] text-white py-6 text-lg font-medium flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FaMicrosoft className="text-2xl" />
              Sign in with Microsoft
            </Button>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>By signing in, you agree to our</p>
              <p className="mt-1">
                <a href="#" className="text-[#ee754e] hover:underline">
                  Terms of Service
                </a>
                {' and '}
                <a href="#" className="text-[#ee754e] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 Uptime. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
