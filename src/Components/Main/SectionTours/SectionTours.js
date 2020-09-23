import React from 'react';

const SectionTours = props => (
    <  >
     {/** Header */}
     <section className="section-tours">
        <div className="u-center-text" style={{ marginBottom: props.headingMargin}}>
                <h2 className="heading-secondary">
                    Most Popular Tours
                </h2>
        </div>

        <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            Tree
                        </div>
                        <div className='card__side card__side--back card__side--back-1'>
                            Trunks
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                <div className="card">
                        <div className="card__side card__side--front">
                            Hello
                        </div>
                        <div className='card__side card__side--back card__side--back-2'>
                            World
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                <div className="card">
                        <div className="card__side card__side--front">
                            Veggie
                        </div>
                        <div className='card__side card__side--back card__side--back-3'>
                            Pizza
                        </div>
                    </div>
                </div>
        </div>
     </section>
    </ >
)

export default SectionTours