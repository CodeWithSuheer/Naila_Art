import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardStats from "./pages/dashboard/DashboardStats";
import SuitsStock from "./pages/suits/SuitsStock";
import Base from "./pages/base/Base";
import Tissue from "./pages/tissue/Tissue";
import Embroidery from "./pages/embroidery/Embroidery";
import './App.css'
import EmbroideryDetails from "./pages/embroidery/EmbroideryDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* AUTH ROUTE */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ADMIN ROUTE */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardStats />} />
            <Route path="suits" element={<SuitsStock />} />
            <Route path="base" element={<Base />} />
            <Route path="tissue" element={<Tissue />} />
            <Route path="embroidery" element={<Embroidery />} />
            <Route path="embroidery-details/:id" element={<EmbroideryDetails />} />
          </Route>

        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
