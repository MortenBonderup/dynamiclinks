import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
    return (
        <div>
            <Header />
            <h1>My Computer Store</h1>
            <Outlet />
        </div>
    );
}