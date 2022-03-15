// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import vFriend from '../../assets/images/weather-dashboard.png';
// import backyardbartender from '../../assets/images/backyardbartender.png';
// import weatherdashboard from '../../assets/images/weather-dashboard.png';

// import Card from '../Card';

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [
//                 {
//                     id: 0,
//                     title: 'Weather Dashboard',
//                     subtitle: 'Application for viewing weather conditions by location.',
//                     imgSrc: 'weatherdashboard',
//                     link: 'https://github.com/Blakedoghyian/weather-dashboard',
//                     selected: false
//                 },
//                 {
//                     id: 1,
//                     title: 'Backyard Bartender',
//                     subtitle: 'Small scale website for viewing cocktail combinations.',
//                     imgSrc: 'backyardbartender',
//                     link: 'https://github.com/jessicalhille/backyard-bartender',
//                     selected: false
//                 },
//                 {
//                     id: 2,
//                     title: 'vFriend',
//                     subtitle: 'Gaming based application for chatting with likeminded individuals.',
//                     imgSrc: 'vFriend',
//                     link: 'https://github.com/Arcanaut/vFriend',
//                     selected: false
//                 },
//             ]
//         }
//     }

//     handleCardClick = (id, card) => {
//         let items = [...this.state.items];

//         items[id].selected = items[id].selected ? false : true;

//         items.forEach(item => {
//             if(item.id !== id) {
//                 item.selected = false;
//             }
//         });

//         this.setState({
//             items
//         });
//     }

//     makeItems = (items) => {
//         return items.map(item => {
//             return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
//         })
//     }

//     render() {
//         return(
//             <Container fluid={true}>
//                 <Row className="justify-content-around">
//                     {this.makeItems(this.state.items)}
//                 </Row>
//             </Container>
//         );
//     }
// }
// export default Carousel;


// carousel images not loading yet need to figure that out.
// sunday game plan -> meet mvp

import React from 'react';
import PhotoList from '../PhotoList';
import { Carousel, Button } from 'react-bootstrap';
import weatherdashboard from '../../assets/small/commercial/0.jpg';
import bartender from '../../assets/small/commercial/1.jpg';
import vfriend from '../../assets/small/commercial/2.jpg';
import budget from '../../assets/small/commercial/3.jpg';
import employee from '../../assets/small/commercial/4.jpg';
import quiz from '../../assets/small/commercial/5.jpg';

function Projects(props) {
    const { currentCategory } = props;
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
