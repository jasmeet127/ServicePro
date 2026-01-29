import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <nav style={{ padding: 10, background: "#eee" }}>
                <Link to="/">Dashboard</Link> |{" "}
                <Link to="/customers">Customers</Link> |{" "}
                <Link to="/jobs">Jobs</Link>
            </nav>

            <hr />

            {/* ?? THIS IS MANDATORY */}
            <Outlet />
        </div>
    );
}
