import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
    return (
        <section className="my-5">
            <h1 className='centerText' id="about">Learn about me!</h1>
            <img src={coverImage} className="coverImg" alt="cover" />
            <div className="my-2 centerText">
                <p>
                    My name is Blake Doghyian and I am an aspiring web developer learning full stack. Over the past few months I have shifted my focus to a completely new field, and have been captivated by the amount of new information and possibilities. Here is a work in progress portfolio for keeping track of my projects and accomplishments and showcasing my skills as a developer. Have a look as I continue my journey through full stack, thanks!
                </p>
            </div>
        </section>
    );
}

export default About;
