/**
 * This container holds most of the website, besides the footer 
 */

import React from 'react';
import '../../sass/layout/_main.scss';
import SectionComposition from './SectionComposition/SectionComposition';
import SectionFeatures from './SectionFeatures/SectionFeatures';
import SectionTours from './SectionTours/SectionTours';

const Main = props => (
    < >
        <main>
            <SectionComposition headingMargin={props.headingMargin}></SectionComposition>
            <SectionFeatures></SectionFeatures>
            <SectionTours></SectionTours>
        </main>
    </>
);

export default Main;