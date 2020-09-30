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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Booking;