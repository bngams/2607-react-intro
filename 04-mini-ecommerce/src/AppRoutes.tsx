import { Routes, Route } from "react-router";
import navItems from "./routes";

function AppRoutes() {
    return (
        <Routes>
            {navItems.map((item) => (
                <Route key={item.path} path={item.path} element={<item.component />} />
            ))}
        </Routes>
    );
}
export default AppRoutes;