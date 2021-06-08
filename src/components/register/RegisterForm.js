import React,{ useState} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form'


    const RegisterForm=()=>{
        const [username, setUsername] = useState([]);
        const [password, setPassword] =useState([]);
       
      
        const handleFormSubmit=(e)=>{
       
           e.preventDefault();
       }
           
        return (

            <FormContainer>
            <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formGroupname">
              <Form.Label>User Name</Form.Label>
              <Form.Control value={username} type="email" placeholder=" User name" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} type="password" placeholder="Password" />
            </Form.Group>
            <div className="btn">
                    <button type="submit">LOGIN</button>
                </div>
          </Form>
            </FormContainer>
        )
    }
 const FormContainer = styled.div`
   background-color:white;
     width:600px;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     height:400px;

     .btn{
        padding-top:30px;  
    }
    h1>{

    padding-bottom:50px;
    }

     button{
background-color:#e7e7e7;
padding:.5rem 1rem;
align-items:center;


}
 
 `;

export default RegisterForm;