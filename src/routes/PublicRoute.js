import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import OurTeam from "../pages/OurTeam";

export const publicRoute = [
    { path: '/', name: "home", Component: Home },
    { path: '/home', name: "home", Component: Home },
    { path: '/contact', name: "contact", Component: Contact },
    { path: '/team', name: "ourTeam", Component: OurTeam },
    { path: '/login', name: "login", Component: Login },
]