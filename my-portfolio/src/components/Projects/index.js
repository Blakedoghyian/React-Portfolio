import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import PhotoList from '../PhotoList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

import Card from '../Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Weather Dashboard',
                    subtitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Backyard Bartender',
                    subtitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'vFriend',
                    subtitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
export default Carousel;


// carousel images not loading yet need to figure that out.
// sunday game plan -> meet mvp