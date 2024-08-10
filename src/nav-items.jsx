import { Home, Stethoscope, Building2, Plane, Info } from "lucide-react";
import Index from "./pages/Index.jsx";
import Procedures from "./pages/Procedures.jsx";
import Hospitals from "./pages/Hospitals.jsx";
import PlanningYourTrip from "./pages/PlanningYourTrip.jsx";
import About from "./pages/About.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Procedures",
    to: "/procedures",
    icon: <Stethoscope className="h-4 w-4" />,
    page: <Procedures />,
  },
  {
    title: "Top Hospitals",
    to: "/hospitals",
    icon: <Building2 className="h-4 w-4" />,
    page: <Hospitals />,
  },
  {
    title: "Plan Your Trip",
    to: "/plan-your-trip",
    icon: <Plane className="h-4 w-4" />,
    page: <PlanningYourTrip />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
];
