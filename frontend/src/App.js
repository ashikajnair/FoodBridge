import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DonorDashboard from './pages/DonorDashboard';
import ReceiverDashboard from './pages/ReceiverDashboard';
import DonorLayout from './pages/donor/DonorLayout';
import DonorHome from './pages/donor/DonorHome';
import AddDonation from './pages/donor/AddDonation';
import MyDonations from './pages/donor/MyDonations';
import DonationHistory from './pages/donor/DonationHistory';
import Support from './pages/donor/Support';
import ReceiverLayout from './pages/receiver/ReceiverLayout';
import ReceiverHome from './pages/receiver/ReceiverHome';
import ViewDonations from './pages/receiver/ViewDonations';
import AcceptedDonations from './pages/receiver/AcceptedDonations';
import ReceiverSupport from './pages/receiver/ReceiverSupport';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageDonations from './pages/admin/ManageDonations';
import PickupSchedules from './pages/admin/PickupSchedules';
import Reports from './pages/admin/Reports';
import SystemSettings from './pages/admin/SystemSettings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/receiver-dashboard" element={<ReceiverDashboard />} />
        <Route path="/donor" element={<DonorLayout />}>
          <Route index element={<DonorHome />} />
          <Route path="add" element={<AddDonation />} />
          <Route path="mydonations" element={<MyDonations />} />
          <Route path="history" element={<DonationHistory />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/receiver" element={<ReceiverLayout />}>
    <Route index element={<ReceiverHome />} />
    <Route path="view-donations" element={<ViewDonations />} />
    <Route path="accepted" element={<AcceptedDonations />} />
    <Route path="support" element={<ReceiverSupport />} />
  </Route>
   <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="users" element={<ManageUsers />} />
  <Route path="donations" element={<ManageDonations />} />
  <Route path="pickups" element={<PickupSchedules />} />
  <Route path="reports" element={<Reports />} />
  <Route path="settings" element={<SystemSettings />} />
  
</Route>


 
      </Routes>
    </Router>
  );
}

export default App;
