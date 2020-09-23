/**
 * This container holds most of the website, besides the footer 
 */

import React from 'react';
import SectionComposition from './SectionComposition/SectionComposition';
import SectionFeatures from './SectionFeatures/SectionFeatures';
import SectionTours from './SectionTours/SectionTours';

const Main = props => (
    < >
        <main>
            <SectionComposition headingMargin={props.headingMargin}></SectionComposition>
            <SectionFeatures></SectionFeatures>
            <SectionTours headingMargin={'8rem'}></SectionTours>
        </main>
    </>
);

export default Main;