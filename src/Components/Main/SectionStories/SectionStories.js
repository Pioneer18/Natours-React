import React from 'react';
import img_1 from '../../../Images/nat-8.jpg';

const SectionStories = props => {

    return (
        <>
            <section className="section-stories">
                <div className="u-center-text u-margin-bottom-large">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={img_1} alt="Person on a tour" className="story__img"/>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading__tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt doloremque alias dicta porro qui itaque laudantium necessitatibus consequatur aperiam, sunt voluptatum minima ducimus hic pariatur, eaque tenetur ea a?
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionStories;