import ContactCard from "./ContactCard"
import {Container, Row, Card } from 'react-bootstrap'

const ContactList = ({ contacts }) => {
    return (
        <Container>
        <Row>
        <Card  style={{backgroundColor:'lightgray'}}>
        <Card.Body  >
        <h1>Contact List</h1>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
            </Card.Body>
        </Card>
        </Row>
        </Container>
    )
}

export default ContactList;