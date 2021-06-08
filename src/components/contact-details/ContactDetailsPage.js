import ContactDetailsCard from "./ContactDetailsCard";
import { Card } from 'react-bootstrap'
const ContactDetailsPage = ({ contact }) => {
    return (
        <Card className="shadow p-3 mb-5 bg-white rounded">
           <Card.Body>
            <ContactDetailsCard contact={contact} />
            </Card.Body>
        </Card>
    )
}

export default ContactDetailsPage;