import React from "react";
import {Link} from "react-router-dom";

const style = {
    nav: {
        background: "#5e1f5d",
        color: "#ffffff"
    },
    list: {
        listStyleType: "none",
        display: "flex",
        margin: "0",
        padding: "0"
    },
    link: {
        display: "block",
        color: "inherit",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration:"none"
    }
}

const Navbar = ({quantity = 0}) => {
    return(
        <nav style={style.nav}>   
            <ul style={style.list}>
                <li style={style.item}>
                    <Link style={style.link} to="/">Home</Link>
                </li>
                <li style={style.item}>
                    <Link style={style.link} to="/shop">Shop</Link>
                </li>
                <li style={style.item}>
                    <Link style={style.link} to="/cart"><i className="fas fa-shopping-cart"> {quantity}</i></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;