import React from "react";
import { Container, Row, Col } from "react-bootstrap";



function Footer() {
    return(
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 font-26 bold-500" md={3}>
                        <h3>Thank you for looking.</h3>
                    </Col>
                    <Col className="p-0 font-26 d-flex justify-content-end" md={3}>
                        <h3>Made by <span className="font-26 --primary"> Blake Doghyian</span></h3>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;