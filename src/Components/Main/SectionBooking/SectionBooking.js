import React from 'react';

const Booking = props => {

    return (
        <>
            <section className="booking">
                <div className="booking__content">
                    {/* Header */}
                    <div className="utilities">
                        <h2 className="heading__secondary"></h2>
                    </div>
                    {/* Form */}
                    <form action="" className="booking__form">
                        <div className="utility">
                            <input type="Full name" className="full-name"/>
                        </div>
                        <div className="utility">
                            <input type="Email address" className="email-address"/>
                        </div>
                        <div className="utility">
                            <input type="text" className="radio-btn"/>
                            <input type="text" className="radio-btn"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Booking;