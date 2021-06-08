import styled from "styled-components";
import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <Wrapper>
        <h1>LoginForm and LoginPage</h1>
             <Formdiv className="Shadow">
            <LoginForm />
            <div className="register" >
                <p >Don't have an account? <a href="/register">Register</a></p>
            </div>
            </Formdiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color:#e7e7e7;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding-bottom:20px;
`;

const Formdiv =styled.div`
width:600px;
background-color:white;
align-items:center;

div>p{
    text-align:center;
}
`;

export default LoginPage;