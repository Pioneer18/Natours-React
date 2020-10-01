import React from 'react';

const Booking = props => {

    return (
        <>
            <section className="section-book">
                {/* Row to center the Booking Box */}
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>
                                <div className="form__group">
                                    {/* Use htmlFor and id to link a label to it's input; when the label is clicked the input will be focused */}
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>
                                <div className="form__group">
                                    {/* Remember 'email' is a type, the browser will check for valid email address format */}
                                    <input type="email" className="form__input" placeholder="Email" id="email" required/>
                                    <label htmlFor="email" className="form__label">Email</label>
                                </div>
                                <div className="form__group">
                                    {/* Don't forget to use the "name" attribute for the browser to consider these inputs in the same group */}
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size"/>
                                        <label htmlFor="small" className="form__radio-label">
                                            <span className="form__radio-button"></span> {/* hide the <input> and style this <span> to be the radio button */}
                                            Small tour group
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size"/>
                                        <label htmlFor="large" className="form__radio-label">
                                            <span className="form__radio-button"></span> {/* hide the <input> and style this <span> to be the radio button */}
                                            Large tour group
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <div className="u-margin-top-medium">
                                        <button className="btn btn--green">Next Step &rarr;</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Booking;