/**
 * This container holds most of the website, besides the footer 
 */

import React from 'react';
import '../../sass/layout/_main.scss';
import SmallButton from './SmallButton/SmallButton';

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
                        <h3 className="heading-tertiary" style={{marginBottom: '1.5rem'}}>You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum quidem dicta eaque repudiandae consectetur totam nobis dolorum, exercitationem nisi optio dignissimos assumenda facere cum nam autem magni mollitia repellendus.
                        </p>

                        <h3 className="heading-tertiary" style={{marginBottom: '1.5rem'}}>Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis quam, perferendis
                        </p>
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