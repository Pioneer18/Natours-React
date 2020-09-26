import React from 'react';
import img_1 from '../../../Images/nat-8.jpg';
import img_2 from '../../../Images/nat-9.jpg';
import Story from './Story/Story';

const SectionStories = props => {

    const caption = "Mary Smith";
    const story_heading = "I had the best week ever with my family";
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt doloremque alias dicta porro qui itaque laudantium necessitatibus consequatur aperiam, sunt voluptatum minima ducimus hic pariatur, eaque tenetur ea a?";

    const caption_2 = "Jack Wilson";
    const story_heading_2 = "I had the best week ever with my family";
    const story_2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt doloremque alias dicta porro qui itaque laudantium necessitatibus consequatur aperiam, sunt voluptatum minima ducimus hic pariatur, eaque tenetur ea a?";

    return (
        <>
            <section className="section-stories">
                    {/* Heading */}
                    <div className="u-center-text u-margin-bottom-large">
                        <h2 className="heading-secondary">
                            We make people genuinely happy
                        </h2>
                    </div>
                    <Story
                        caption={caption}
                        story_heading={story_heading}
                        story={story}
                        img={img_1}
                    />
                    <Story
                        caption={caption_2}
                        story_heading={story_heading_2}
                        story={story_2}
                        img={img_2}
                    />
            </section>
        </>
    );
}

export default SectionStories;