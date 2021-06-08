import styled from 'styled-components';
import RegisterForm from './RegisterForm';

const RegisterPage = (props) => {
    return (
        <RegisterDiv>
        <h1>RegisterForm and RegisterPage</h1>
              <Wrapper>
              <RegisterForm />
            <div>
                <p>Already have an account? <a href="/login">Login</a>.</p>
            </div>
            </Wrapper>
        </RegisterDiv>
    )
}

const RegisterDiv=styled.div`
background-color: lightgrey;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding-bottom:20px;

`;

const Wrapper = styled.div`
width:600px;
background-color:white;
align-items:center;

div> p {
    text-align:center;
}
`;

export default RegisterPage;