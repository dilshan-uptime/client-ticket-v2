import { useAppSelector } from "@/hooks/store-hooks";
import { getAuth } from "@/app/redux/authSlice";
import { useMsalAuth } from "@/hooks/useMsalAuth";

export const HomePage = () => {
  const auth = useAppSelector(getAuth);
  const { accounts } = useMsalAuth();
  const account = accounts[0];

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-[#ee754e] mb-2">
                  Welcome to Uptime
                </h1>
                <p className="text-xl text-gray-600">
                  Hello, {account?.name || auth?.user?.firstName || 'User'}!
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-[#ee754e] text-white flex items-center justify-center text-2xl font-bold">
                {(account?.name || auth?.user?.firstName || 'U').charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Account Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="text-lg font-medium text-gray-800">
                    {account?.name || `${auth?.user?.firstName || ''} ${auth?.user?.lastName || ''}`.trim() || 'N/A'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-lg font-medium text-gray-800">
                    {account?.username || auth?.user?.email || 'N/A'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Account ID</p>
                  <p className="text-lg font-medium text-gray-800 truncate">
                    {account?.localAccountId || auth?.user?.id || 'N/A'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Role</p>
                  <p className="text-lg font-medium text-gray-800">
                    {auth?.user?.roleCode || 'USER'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 rounded-full bg-[#ee754e]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#ee754e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tickets</h3>
              <p className="text-gray-600 text-sm">
                Manage and track your support tickets efficiently
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 rounded-full bg-[#ee754e]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#ee754e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">
                Smart automation for faster ticket resolution
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 rounded-full bg-[#ee754e]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#ee754e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track performance and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
