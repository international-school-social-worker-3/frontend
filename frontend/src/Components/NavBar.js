import React from "react";

function NavBar () {
    return (
        <div className="nav-container">
            <section className="nav">
                <div className="home">
                    <button>Home</button>
                </div>
                <div className="sign-out">
                    <button>Sign Out</button>
                </div>
            </section>
        </div>
    )
}

export default NavBar;