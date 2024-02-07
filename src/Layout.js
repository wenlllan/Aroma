import react from "react";

import Nav from './Nav';
import {Outlet} from "react-router-dom"
import Footer from './Footer';

const Layout = ({shopItems, setShopItems})=>{
    return (
        <>
            <Nav shopItems={shopItems} setShopItems={setShopItems}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;