import React from 'react';

export default function NavBar() {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand homeButton" href="index.html">Online Store</a>
                <button className="btn btn-primary" id="shoppingCartButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Shopping Cart</button>
            </div>
        </nav>
    </>
    )
}