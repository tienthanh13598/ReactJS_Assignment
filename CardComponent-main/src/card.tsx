import React from 'react';
import { FoodList } from './FoodList';



interface CardProps {
    icon: string;
    title: string;
    price: string;
    taxes: string;
    primaryColor: string;
    contentList: FoodList[];
}


const Card = (prod: CardProps) => {
    const { icon, price, title, taxes, contentList, primaryColor } = prod;
   

    return (
        <div className="card">
            <div className="card__icon">
                <div className="card__icon--img">
                    <i className={icon} style={{color: primaryColor}}></i>
                </div>
                <div className="card__icon--content" style={{color: primaryColor}}>
                    {title}
                </div>
            </div>
            <div className="card__price">
                {price}
            </div>
            <div className="card__taxes">
                {taxes}
            </div>
            <div className="card__detail">
                {contentList.map((item, index) => (
                    <div className="card__detail--row" key={index}>
                        <div className="card__detail--check" >
                            {item.isChecked ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                        </div>
                        <div className="card__detail--title" style={!item.isChecked ? {opacity: 0.3} : {opacity: 1}}>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn-buy">Buy Now</button>
        </div>
    );
}

export default Card;