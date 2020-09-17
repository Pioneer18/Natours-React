/**
 * This container holds most of the website, besides the footer 
 */

import React from 'react';
import '../../sass/layout/_main.scss';
import SmallButton from './SmallButton/SmallButton';
import TextColumn1of2 from './TextColumn1of2/TextColumn1of2';

const Main = props => (
    < >
        <main>
            <section className="section-about">
                {/** Header */}
                <div className="u-center-text" style={{marginBottom: props.headingMargin}}>
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                {/** Row (props: text for column 1, srcs for images in column 2) */}
                <div className="row">
                    <div className="col-1-of-2">
                        <TextColumn1of2
                            heading1={`You're going to fall in love with nature`} 
                            heading2={`Live adventures like you never have before`}
                            paragraph1={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum quidem dicta eaque repudiandae consectetur totam nobis dolorum, exercitationem nisi optio dignissimos assumenda facere cum nam autem magni mollitia repellendus.`} 
                            paragraph2={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis quam, perferendis`} 
                        ></TextColumn1of2>
                        <SmallButton></SmallButton>
                    </div>
                    <div className="col-1-of-2">
                        Image composition
                    </div>
                </div>
            </section>
        </main>
    </>
);

export default Main;