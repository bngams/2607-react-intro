import type { NavItems } from "./models/NavItem";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./features/products/pages/Products";

const navItems: NavItems = [
    { path: "/", label: "Home", component: Home, inMenu: true },
    { path: "/about", label: "About", component: About, inMenu: true },
    { path: "/products", label: "Products", component: Products, inMenu: true },
    { path: "*", label: "Not Found", component: NotFound, inMenu: false },
];
export default navItems;