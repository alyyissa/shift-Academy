import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";
import Footer from "../components/HomeLayout/Footer";
import Navbar from "../components/HomeLayout/Navbar";

const AdminLayout = () => {
  return (
    <>
    <Navbar />
      <div className="flex h-dvh bg-gray-50">
        <Sidebar/>

        <main className="flex-1 ml-64 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
