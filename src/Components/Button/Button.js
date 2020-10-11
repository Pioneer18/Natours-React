import React, { useRef } from 'react';
import '../../sass/Components/_button.scss';


{/* Button linked to id section-tours; css anchors */}
const Button = props => {

    return (
        <a href="#section-tours" className="btn btn--white btn--animated" >Discover our tours</a>
    );
}

export default Button;