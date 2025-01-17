/**
 * This container holds most of the website, besides the footer 
 */

import React from 'react';
import SectionComposition from './SectionComposition/SectionComposition';
import SectionFeatures from './SectionFeatures/SectionFeatures';
import SectionTours from './SectionTours/SectionTours';
import SectionStories from './SectionStories/SectionStories';
import SectionBooking from './SectionBooking/SectionBooking';

const Main = props => (
    < >
        <main>
            <SectionComposition headingMargin={props.headingMargin}></SectionComposition>
            <SectionFeatures></SectionFeatures>
            <SectionTours headingMargin={'8rem'}></SectionTours>
            <SectionStories></SectionStories>
            <SectionBooking></SectionBooking>
        </main>
    </>
);

export default Main;