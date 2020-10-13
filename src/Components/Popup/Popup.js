import React from 'react';
import img1 from '../../Images/nat-8.jpg';
import img2 from '../../Images/nat-9.jpg';

const Popup = props => {
    
    return(
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={img1} alt="Tour photo" className="popup__img"/>
                    <img src={img2} alt="Tour photo" className="popup__img" id="last-img"/>
                </div>
                <div className="popup__right">
                    <div className="u-margin-bottom-small">
                        <a href="#section-tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary">Start booking now</h2>
                    </div>
                    <div className="u-margin-bottom-small">
                        <h3 className="heading-tertiary">Important &ndash; Please read these terms before booking</h3>
                    </div>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Venenatis lectus magna fringilla urna porttitor. Nisl nisi scelerisque eu ultrices. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Ultrices mi tempus imperdiet nulla.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    );
}

export default Popup;