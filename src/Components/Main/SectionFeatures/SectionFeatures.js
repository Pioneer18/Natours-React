import React from 'react';
import '../../../sass/layout/_section-features.scss';
import FeatureBox from '../FeatureBox/FeatureBox';

const SectionFeatures = props => (
    <  >
    <section className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox 
                    icon={'icon-basic-world'}
                    header={'Explore the World'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, molestias iure tempore repellat porro cupiditate.'}>
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox 
                    icon={'icon-basic-compass'}
                    header={'meet nature'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, molestias iure tempore repellat porro cupiditate.'}>
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox 
                    icon={'icon-basic-map'}
                    header={'fiind your way'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, molestias iure tempore repellat porro cupiditate.'}>
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox 
                    icon={'icon-basic-heart'}
                    header={'Live a healthier life'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, molestias iure tempore repellat porro cupiditate.'}>
                </FeatureBox>
            </div>
        </div>
    </section>
    </ >
);

export default SectionFeatures;