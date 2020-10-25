import React from 'react';
import logo from '../../Images/logo-green-2x.png';
import low_res_logo from '../../Images/logo-green-1x.png';

const Footer = props => {

    return (
        <footer className="footer">
            <div className="footer__logo-box">
                {/* Low / High Res Density Responsive Image */}
                <img srcSet={`${logo} 2x, ${low_res_logo} 1x`} alt="Full Logo" className="footer__logo"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Jonathan D Sells</a> as a demonstrative webpage. Copyright &copy; by Jonathan D Sells, inspired directly by Jonas Schmedtmann
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;