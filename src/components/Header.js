import React from "react";

function Header() {
   return (
      <header>
         <div className="header-left">
            <img width={40} height={40} src="/img/logo.png" alt="img" />
            <div className="header-info">
               <h3 className="text-upper">React Sneakers</h3>
               <p>Магазин лучших кроссовок</p>
            </div>
         </div>

         <ul className="header-right">
            <li>
               <img width={18} height={18} src="/img/cart.svg" alt="img" />
               <span>1200 Br</span>
            </li>
            <li>
               <img width={18} height={18} src="/img/user.svg" alt="img" />
            </li>
         </ul>
      </header>
   );
}
export default Header;