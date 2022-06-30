

function Drawer() {
   return (
      <div style={{ display: 'none' }} className="overlay">
         <div className="drawer">
            <h2>
               Корзина
               <img className="removeBtn" width={18} height={18} src="/img/delete.svg" alt="remove" />
            </h2>
            <div className="items">
               <div className="cart-item">
                  <div style={{ backgroundImage: 'url(/img/sneakers/img2.jpg)' }} className="cart-item-img"></div>
                  <div className="info">
                     <p>Мужсие кроссовки Nike Air Jordan</p>
                     <b>1300 Br</b>
                  </div>
                  <img className="removeBtn" width={18} height={18} src="/img/delete.svg" alt="remove" />
               </div>
               <div className="cart-item">
                  <div style={{ backgroundImage: 'url(/img/sneakers/img6.jpg)' }} className="cart-item-img"></div>
                  <div className="info">
                     <p>Мужсие кроссовки Nike Air Jordan</p>
                     <b>1300 Br</b>
                  </div>
                  <img className="removeBtn" width={18} height={18} src="/img/delete.svg" alt="remove" />
               </div>
            </div>
            <div className="cartTotalBlock">
               <ul className="summary">
                  <li>
                     <span>Итого:</span>
                     <div></div>
                     <b>2700 Br</b>
                  </li>
                  <li>
                     <span>Налог 5%:</span>
                     <div></div>
                     <b>100 Br</b>
                  </li>
               </ul>
               <button className="greenButton">Оформить заказ <img width={20} height={18} src="/img/arrow.svg" alt="arrow" /></button>
            </div>
         </div>
      </div>
   );
}
export default Drawer;