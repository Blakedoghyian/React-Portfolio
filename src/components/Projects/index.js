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
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}
export default Projects;
