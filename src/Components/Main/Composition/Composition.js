import React from 'react';
import imgNat1 from '../../../Images/nat-1-large.jpg';
import imgNat2 from '../../../Images/nat-2-large.jpg';
import imgNat3 from '../../../Images/nat-3-large.jpg';

const Composition = props => (
    <  >
        <div className="composition">
            <img src={imgNat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
            <img src={imgNat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
            <img src={imgNat3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
        </div>
    </ >
);

export default Composition;