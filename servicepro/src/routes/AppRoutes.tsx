import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
    return <h1 style={{ padding: 20 }}>HOME WORKING ?</h1>;
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
