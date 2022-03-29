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
            <p>click the button to view the Github Repository</p>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weatherdashboard}
                        alt="weather dashboard"
                    />
                    <Carousel.Caption>
                        <Button className="shadow-lg p-3 mb-5 bg-white rounded" href='https://github.com/Blakedoghyian/weather-dashboard' target='_blank'variant="outline-dark">Weather Dashboard</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bartender}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Button className="shadow-lg p-3 mb-5 bg-white rounded" href='https://github.com/jessicalhille/backyard-bartender' target='_blank'variant="outline-dark">Backyard Bartender</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vfriend}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Button className="shadow-lg p-3 mb-5 bg-white rounded" href='https://github.com/Arcanaut/vFriend' target='_blank'variant="outline-dark">vFriend</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={budget}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Button className="shadow-lg p-3 mb-5 bg-white rounded" href='https://github.com/Blakedoghyian/budget-tracker' target='_blank'variant="outline-dark">Budget Tracker</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={employee}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Button className="shadow-lg p-3 mx-1 mb-5 bg-white rounded" href='http://www.bayleesboards.com' target='_blank'variant="outline-dark">Baylee's Boards</Button>
                        <Button className="shadow-lg p-3 mx-1 mb-5 bg-white rounded" href="https://www.github.com/Blakedoghyian/baylees-boards" target='_blank' variant='outline-dark'>Github</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={quiz}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Button className="shadow-lg p-3 mb-5 bg-white rounded" href='https://github.com/Blakedoghyian/code-quiz' target='_blank'variant="outline-dark">Code Quiz</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
export default Projects;
