import React from "react";

function NavBar() {
    function changeBackground(e) {
        e.target.style.background = 'lightblue';
      }

      function revertBackground(e) {
        e.target.style.background = 'gold';
      }

    return (
        <div className="nav-container">
            <section className="nav">
                <div className="home">
                    <button>Home</button>
                </div>
                <div className="sign-out">
                    <button onMouseOver={changeBackground} onMouseLeave={revertBackground}>Sign Out</button>
                    
                </div>
            </section>
        </div>
    )
}

export default NavBar;