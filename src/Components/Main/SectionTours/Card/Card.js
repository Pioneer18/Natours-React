import React, { useState } from 'react';
import classNames from 'classnames';

const Card = props => {
    const [] = useState(props);

    return (<div className="card">
        {/* FRONT */}
        <div className="card__side card__side--front">
            <div className={classNames("card__picture", `card__picture--${props.cardId}`)}> {/* classnames: card_picture--1 */}
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className={classNames("card__heading-span", `card__heading-span--${props.cardId}`)}> {/* classnames: card__heading-span--1 */}
                    {props.cardHeading}
                </span>
            </h4>
            <div className="card__details">
                <ul>
                    <li>{props.list.li1}</li>
                    <li>{props.list.li2}</li>
                    <li>{props.list.li3}</li>
                    <li>{props.list.li4}</li>
                    <li>{props.list.li5}</li>
                </ul>
            </div>
        </div>
        {/* BACK */}
        <div className={classNames('card__side card__side--back', `card__side--back-${props.cardId}`)}> {/* classnames: card__side--back-1 */}
            <div className="card__cta">
                <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">{`$${props.price}`}</p>
                </div>
                <a href="#popup" className="btn btn--white">Book Now!</a>
            </div>
        </div>
    </div>);
};

export default Card;
