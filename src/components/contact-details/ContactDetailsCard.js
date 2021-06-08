import Image from 'react-bootstrap/Image'
import {Container, Row, Col } from 'react-bootstrap'


const  ContactDetailsCard = ({ contact }) => {
    return (
        <Container>
        <Row>
        
        <Col md-2>
            <div>
                <Image src={contact?.profilePic} roundedCircle width ='150' alt={`Profile of ${contact?.firstName}${contact?.lastName}.` } />
            </div>
            </Col>
            <Col md-2>
            <div>
                <p>{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
            </Col>
            </Row>
        </Container>
    )
}

export default ContactDetailsCard;

