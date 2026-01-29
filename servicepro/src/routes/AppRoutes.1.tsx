import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import CustomersList from "../pages/customers/CustomersList";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/customers" element={<CustomersList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
