import { useSelector } from "react-redux";

const Dashboard = () => {
  const userRole = useSelector((store) => store.userRole.currentRole);
  const vCoins = useSelector((store) => store.vCoins.balance);
  const notifications = useSelector((store) => store.notifications.notifications);
  const deliveries = useSelector((store) => store.delivery.deliveries);
  const mealShares = useSelector((store) => store.mealShare.shares);

  const renderStudentDashboard = () => (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">VCoins Balance</h2>
          <p className="text-2xl font-bold text-green-600">{vCoins} VCoins</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <p className="text-gray-600">View your order history</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Meal Shares</h2>
          <p className="text-gray-600">{mealShares.length} active shares</p>
        </div>
      </div>
    </div>
  );

  const renderVendorDashboard = () => (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Today's Orders</h2>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">₹2,450</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Pending Deliveries</h2>
          <p className="text-gray-600">{deliveries.filter(d => d.status !== 'delivered').length} pending</p>
        </div>
      </div>
    </div>
  );

  const renderRunnerDashboard = () => (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Runner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Active Deliveries</h2>
          <p className="text-2xl font-bold text-orange-600">{deliveries.filter(d => d.status === 'in_transit').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Earnings Today</h2>
          <p className="text-2xl font-bold text-green-600">₹350</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Available Orders</h2>
          <p className="text-gray-600">{deliveries.filter(d => d.status === 'pending').length} available</p>
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Active Orders</h2>
          <p className="text-2xl font-bold text-orange-600">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">₹15,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Meal Shares</h2>
          <p className="text-gray-600">{mealShares.length} active</p>
        </div>
      </div>
    </div>
  );

  switch (userRole) {
    case "Student":
      return renderStudentDashboard();
    case "Vendor":
      return renderVendorDashboard();
    case "Runner":
      return renderRunnerDashboard();
    case "Admin":
      return renderAdminDashboard();
    default:
      return renderStudentDashboard();
  }
};

export default Dashboard;
