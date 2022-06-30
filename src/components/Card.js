import React from 'react'

function Card() {
   return (
      <div className="card">
         <div className="favorite">
            <img width={18} height={18} src="/img/like.svg" alt="like" />
         </div>
         <img width={133} height={112} src="/img/sneakers/img2.jpg" alt="" />
         <h5>Мужсие кроссовки Nike Air Jordan</h5>
         <div className="card-mid">
            <div className="card-botom">
               <span>Цена:</span>
               <b>1300 Br</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
         </div>
      </div>
   )
}
export default Card;