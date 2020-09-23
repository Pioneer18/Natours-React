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
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    The Sea Explorer
                                </span>
                            </h4>
                            <div className="card__details">
                                Details
                            </div>
                        </div>
                        <div className='card__side card__side--back card__side--back-1'>
                            Trunks
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    Heading
                                </span>
                            </h4>
                            <div className="card__details">
                                Details
                            </div>
                        </div>
                        <div className='card__side card__side--back card__side--back-2'>
                            World
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    Heading
                                </span>
                            </h4>
                            <div className="card__details">
                                Details
                            </div>
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