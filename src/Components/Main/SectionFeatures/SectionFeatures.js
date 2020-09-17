import React from 'react';
import '../../../sass/layout/_section-features.scss';
import FeatureBox from '../FeatureBox/FeatureBox';

const SectionFeatures = props => (
    <  >
    <section className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox></FeatureBox>
            </div>
        </div>
    </section>
    </ >
);

export default SectionFeatures;