import React from 'react';
import styles from './Card.module.scss';



function Card(props) {
   console.log(props);

   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img width={18} height={18} src="/img/like.svg" alt="like" />
         </div>
         <img width={133} height={112} src={props.imageUrl} alt="" />
         <h5>{props.title}</h5>
         <div className="card-mid">
            <div className="card-botom">
               <span>Цена:</span>
               <b>{props.price} Br</b>
            </div>
            <button className="button" onClick={props.onClick}>
               <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
         </div>
      </div>
   )
}
export default Card;