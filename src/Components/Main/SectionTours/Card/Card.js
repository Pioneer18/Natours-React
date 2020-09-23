import React from 'react';
import classNames from 'classnames';

const Card = props => (
    <div className="card">
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
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                </ul>
            </div>
        </div>
        {/* BACK */}
        <div className={classNames('card__side card__side--back', `card__side--back-${props.cardId}`)}> {/* classnames: card__side--back-1 */}
            <div className="card__cta">
                <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                </div>
                <a href="#" className="btn btn--white">Book Now!</a>
            </div>
        </div>
    </div>);

export default Card;
