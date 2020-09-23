import React from 'react';
import Card from './Card/Card';

const listOne = {
    li1: '3 day tours',
    li2: 'Up to 30 people',
    li3: '2 tour guides',
    li4: 'Sleep in cozy hotels',
    li5: 'Difficulty: easy'
}
const listTwo = {
    li1: '5 day tours',
    li2: 'Up to 15 people',
    li3: '3 tour guides',
    li4: 'Sleep in provided tents',
    li5: 'Difficulty: hard',
}
const listThree = {
    li1: '7 day tours',
    li2: 'Up to 40 people',
    li3: '6 tour guides',
    li4: 'Sleep in provided tents',
    li5: 'Difficulty: medium',
}

const SectionTours = props => (
    <  >
        {/** Header */}
        <section className="section-tours">
            <div className="u-center-text" style={{ marginBottom: props.headingMargin }}>
                <h2 className="heading-secondary">
                    Most Popular Tours
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <Card 
                        cardId={'1'}
                        cardHeading={'The Sea Explorer'}
                        list={listOne}
                        price={'297'}
                    />
               
                </div>
                <div className="col-1-of-3">
                    <Card
                        cardId={'2'}
                        cardHeading={'The Forest Hiker'}
                        list={listTwo}
                        price={'497'}
                    />
                </div>
                <div className="col-1-of-3">
                    <Card
                        cardId={'3'}
                        cardHeading={'The Snow Adventurer'}
                        list={listThree}
                        price={'897'}
                    />
                </div>
            </div>
            
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover all tours</a>
            </div>

            
        </section>
    </ >
)

export default SectionTours