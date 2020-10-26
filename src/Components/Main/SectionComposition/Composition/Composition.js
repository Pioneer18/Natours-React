import React from 'react';

import imgNat1_large from '../../../../Images/nat-1-large.jpg';
import imgNat1 from '../../../../Images/nat-1.jpg';
import imgNat2_large from '../../../../Images/nat-2-large.jpg';
import imgNat2 from '../../../../Images/nat-2.jpg';
import imgNat3_large from '../../../../Images/nat-3-large.jpg';
import imgNat3 from '../../../../Images/nat-3.jpg';

const Composition = props => (
    <  >
        <div className="composition">

            <img srcSet={`${imgNat1} 300w, ${imgNat1_large} 1000w`} 
                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                 alt="Photo 1"
                 className="composition__photo composition__photo--p1"
                 src={imgNat1_large}/>

            <img srcSet={`${imgNat2} 300w, ${imgNat2_large} 1000w`} 
                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                 alt="Photo 2"
                 className="composition__photo composition__photo--p2"
                 src={imgNat2_large}/>

            <img srcSet={`${imgNat3} 300w, ${imgNat3_large} 1000w`} 
                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                 alt="Photo 3"
                 className="composition__photo composition__photo--p3"
                 src={imgNat3_large}/>

            {/*<img src={imgNat1_large} alt="Photo 1" className="composition__photo composition__photo--p1"/>
            <img src={imgNat2_large} alt="Photo 2" className="composition__photo composition__photo--p2"/>
            <img src={imgNat3_large} alt="Photo 3" className="composition__photo composition__photo--p3"/>*/}
        </div>
    </ >
);

export default Composition;