import AdminBooks from "../../pages/AdminBooks";
import AdminUsers from "../../pages/AdminUsers";
import Home from "../../pages/Home";
import Page404 from "../../pages/Page404";
import SingleBook from "../../pages/SingleBook";
import UserLayout from "./layout/UserLayout";

const routesUnprotected = [
    {
        path: `/`,
        page: ()=> (
        <UserLayout el={<Home />} />
        ),
        isDisabled: false,
    },
    {
        path: `/books/:id`,
        page: ()=> (
        <UserLayout el={<SingleBook />} />
        ),
        isDisabled: false,
    },
    {
        path: `/page-404`,
        page: ()=> (
        <UserLayout el={<Page404 />} />
        ),
        isDisabled: false,
    },
    {
        path: `/*`,
        page: ()=> (
        <UserLayout el={<Page404 />} />
        ),
        isDisabled: false,
    },
    
]


const routesAdminProtected = [
    {
        path: ``,
        page: ()=> (
        <AdminBooks />
        ),
        isDisabled: false,
    },
    {
        path: `user`,
        page: ()=> (
        <AdminUsers />
        ),
        isDisabled: false,
    },
]


export {
    routesUnprotected,
    routesAdminProtected
}