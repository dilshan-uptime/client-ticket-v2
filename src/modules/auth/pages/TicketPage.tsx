import { useAppSelector } from "@/hooks/store-hooks";
import { getAuth } from "@/app/redux/authSlice";
import { useMsalAuth } from "@/hooks/useMsalAuth";

export const TicketPage = () => {
  const auth = useAppSelector(getAuth);
  const { accounts } = useMsalAuth();
  const account = accounts[0];

  // TODO: Replace mock data with real API integration
  const mockStats = {
    openTickets: 12,
    resolvedTickets: 48,
    avgResponseTime: '2.5h',
  };

  // TODO: Replace with API call to fetch tickets
  const mockTickets = [
    { id: 'TKT-001', subject: 'Login issue on mobile app', status: 'Open', priority: 'High', created: '2 hours ago' },
    { id: 'TKT-002', subject: 'Payment processing error', status: 'In Progress', priority: 'Critical', created: '5 hours ago' },
    { id: 'TKT-003', subject: 'Feature request: Dark mode', status: 'Open', priority: 'Low', created: '1 day ago' },
    { id: 'TKT-004', subject: 'Data export not working', status: 'Resolved', priority: 'Medium', created: '2 days ago' },
    { id: 'TKT-005', subject: 'Email notifications delayed', status: 'Open', priority: 'Medium', created: '3 days ago' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Ticket Dashboard
              </h1>
              <p className="text-lg text-gray-600">
                Welcome back, {account?.name || auth?.user?.firstName || 'User'}! 👋
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-[#ee754e] text-white rounded-xl font-semibold hover:bg-[#d66540] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
                + New Ticket
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#ee754e]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Open Tickets</p>
                <p className="text-3xl font-bold text-gray-900">{mockStats.openTickets}</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#ee754e]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#ee754e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Resolved</p>
                <p className="text-3xl font-bold text-gray-900">{mockStats.resolvedTickets}</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Avg Response Time</p>
                <p className="text-3xl font-bold text-gray-900">{mockStats.avgResponseTime}</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#ee754e] to-[#d66540]">
            <h2 className="text-xl font-bold text-white">Recent Tickets</h2>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Ticket ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Created</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-900">{ticket.id}</td>
                      <td className="py-4 px-4 text-gray-700">{ticket.subject}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.status === 'Open' ? 'bg-blue-100 text-blue-700' :
                          ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                          ticket.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                          ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{ticket.created}</td>
                      <td className="py-4 px-4">
                        <button className="text-[#ee754e] hover:text-[#d66540] font-semibold transition-colors">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
