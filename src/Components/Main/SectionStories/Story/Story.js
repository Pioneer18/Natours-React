import React from 'react';

const Story = props => {

    return (
        < >
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={props.img} alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">{props.caption}</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading__tertiary u-margin-bottom-small">{props.story_heading}</h3>
                        {props.story}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Story;