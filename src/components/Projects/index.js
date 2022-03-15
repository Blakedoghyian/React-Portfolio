import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import weatherdashboard from '../../assets/small/commercial/0.jpg';
import bartender from '../../assets/small/commercial/1.jpg';
import vfriend from '../../assets/small/commercial/2.jpg';
import budget from '../../assets/small/commercial/3.jpg';
import employee from '../../assets/small/commercial/4.jpg';
import quiz from '../../assets/small/commercial/5.jpg';

function Projects() {

    return (
        <section>
            <h1>My Projects</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weatherdashboard}
                        alt="weather dashboard"
                    />
                    <Carousel.Caption className='bg-grey'>
                        <h2 className='carouseltext'>Weather Dashboard</h2>
                        <Button href='https://github.com/Blakedoghyian/weather-dashboard' target='_blank'variant="outline-dark">Github Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bartender}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='bg-grey'>
                        <h2 className='carouseltext'>Backyard Bartender</h2>
                        <Button href='https://github.com/jessicalhille/backyard-bartender' target='_blank'variant="outline-dark">Github Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vfriend}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bg-grey'>
                        <h2 className='carouseltext'>vFriend gaming app</h2>
                        <Button href='https://github.com/Arcanaut/vFriend' target='_blank'variant="outline-dark">Github Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={budget}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bg-grey'>
                        <h2 className='carouseltext'>Budget Tracker app</h2>
                        <Button href='https://github.com/Blakedoghyian/budget-tracker' target='_blank'variant="outline-dark">Github Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={employee}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bg-grey'>
                        <h2 className='carouseltext'>Employee Tracker app</h2>
                        <Button href='https://github.com/Blakedoghyian/employee-tracker' target='_blank'variant="outline-dark">Github Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={quiz}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bg-grey'>
                        <h2 className='carouseltext'>Coding Quiz Challenge</h2>
                        <Button href='https://github.com/Blakedoghyian/code-quiz' target='_blank'variant="outline-dark">Github Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
export default Projects;
