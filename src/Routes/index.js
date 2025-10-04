import HomePage from "~/Pages/HomePage";
import AboutPage from "~/Pages/AboutPage";
import NotFoundPage from "~/Pages/NotFoundPage";

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
        path: '*',
        page: NotFoundPage,
        isShowNavbar: false,
        isShowPoster: false,
    }
];