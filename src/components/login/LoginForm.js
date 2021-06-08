import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import styled from 'styled-components';

const LoginForm = ()=> {
 const [username, setUsername] = useState([]);
 const [password, setPassword] =useState([]);

const handleFormSubmit=(e)=>{

    e.preventDefault();
}
    
        return (
            <FormContainer>
            <Form className="Form_container" onSubmit={handleFormSubmit} >
                
                <div>
                    <Form htmlFor="username">Username</Form>
                    <input 
                        id="username"
                        name="username"
                        type="text" 
                        placeholder="Username"  
                        value={username}
                        onChange={e => setUsername(e.targrt.value)}
                        // onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <Form htmlFor="password">Password</Form>
                    <input 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        // onChange={this.handleInputChange}
                    />
                </div>
                <div className="btn">
                
                    <button type="submit">LOGIN</button>
                </div>
                
            </Form>
            </FormContainer>
        );
    };


    const FormContainer =styled.div`
     background-color:white;
     width:600px;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     height:400px;
   h1{
       padding-bottom:50px;
   }
    .btn{
        padding-top:30px;
        
    }
    
     button{
        background-color: #e7e7e7;
        padding:.5rem 1rem;
        align-items:center;
        
        
     }
      
    `;

export default LoginForm;