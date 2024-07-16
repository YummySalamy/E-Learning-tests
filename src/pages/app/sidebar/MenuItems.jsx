import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegGrinStars } from "react-icons/fa";



const MenuItems = [
    {
        subheader: "Principal",
    },
    {
        title: "Dashboard",
        icon: <MdOutlineSpaceDashboard />,
        path: "/app/dashboard",
    },
    {
        subheader: "Contenido",
    },
    {
        title: "Cursos",
        icon: <IoIosSchool />,
        path: "/app/courses",
    },
    {
        subheader: "Extra",
    },
    {
        title: "Eventos",
        icon: <FaCalendarAlt />,
        path: "/app/events",
    },
    {
        title: "Membresía",
        icon: <FaRegGrinStars />,
        path: "/app/memberships",
    },
    {
        title: "Configuración",
        icon: <IoSettingsSharp />,
        path: "/app/settings",
    },
];

export default MenuItems;