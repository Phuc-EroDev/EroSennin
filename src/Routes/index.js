import HomePage from "~/Pages/HomePage";
import AboutPage from "~/Pages/AboutPage";
import NotFoundPage from "~/Pages/NotFoundPage";
import ResumePage from "~/Pages/ResumePage";
import ProjectPage from "~/Pages/ProjectPage";
import FavoritePage from "~/Pages/FavoritePage";
import CVPage from "~/Pages/CVPage";
import ContactPage from "~/Pages/ContactPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '/about',
        page: AboutPage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '/resume',
        page: ResumePage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '/projects',
        page: ProjectPage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '/favorite',
        page: FavoritePage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '/cv',
        page: CVPage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '/contact',
        page: ContactPage,
        isShowNavbar: true,
        isShowPoster: true,
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowNavbar: false,
        isShowPoster: false,
    }
];