import {Container, Row,Col, Card, Image, Button} from 'react-bootstrap'
//import styled from 'styled-components';


const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
       <Container >    
       <Row>
              <Card className=" cards shadow p-3 mb-5 bg-white rounded" style={{ hight: '12px' }}>
              <Row>
              <Col lg={4}>
              <div style={{borderRight:'1px solid lightgray '}}>
              <Image src={profilePic} roundedCircle alt={`Profile of ${firstName} ${lastName}`} width='150' padding= '-200' /> </div></Col>
                <Col lg={7}><div style={{marginTop:'100px'}}>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div></Col>
                <Col lg={1}><div><Button style={{backgroundColor: 'lightgray', borderRadius:'50%',border:'none', fontWeight:'600', marginTop:'100px'}}>X</Button></div></Col>
                </Row>
        </Card>
        </Row>
        </Container>
 
    )
}



export default ContactCard;



