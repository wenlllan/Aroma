import react from "react";

import Nav from './Nav';
import {Outlet} from "react-router-dom"
import Footer from './Footer';

const Layout = ({shopItems, setShopItems,shopCount})=>{
    return (
        <>
            <Nav shopItems={shopItems} setShopItems={setShopItems} shopCount={shopCount}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;