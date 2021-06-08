import React,{useState} from "react";
import styled from "styled-components";


function ContactCreateForm() {
   const[state,setState]=useState(
{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        profilePic: ''
    
}
   );
   const handleFormSubmit=(e)=>{

    e.preventDefault();
}

const handleChange=e=>{
    const {name ,value}=e.target
    setState({
     ...state,
       [name]: value

    })
}

    return (
        <ContactForm>
        <h1>ContactCreateForm</h1>

        <form  onSubmit={handleFormSubmit}>
        <div className="imgdiv">
        <img src={state.profilePic} roundedCircle alt="Profile preview."  />
        </div>
        <div>
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={state.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="ProfilePictureUrl"
                    name="profilePic"
                    value={state.profilePic}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">ADD CONTACT</button>
            </div>
        </div>
    </form>
        </ContactForm>
    );
};

const ContactForm =styled.div`
form{
    background-color:#f1f1f1;
    display:flex;
    justify-content:center;
    align-items:center;
}

.imgdiv{
    display: inline-block;
    padding-right: 25px;
    line-height: 50px;
    border-radius: 50px;
    background-color: #f1f1f1;

}
div>input{
 width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;

}
button{
  
        background-color: #e7e7e7;
        padding:.5rem 1rem;
        align-items:center;
}
 
`;

export default ContactCreateForm;














































// class ContactCreateForm extends React.Component {
    
//     constructor(props) {
//         super(props);

//         this.state = {
//             firstName: '',
//             lastName: '',
//             phoneNumber: '',
//             email: '',
//             address: '',
//             profilePic: '',
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     }

//     handleInputChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleFormSubmit(event) {
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleFormSubmit}>
//                 <div>
//                     <img src={this.state.profilePic} alt="Profile preview." />
//                 </div>
//                 <div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             name="firstName"
//                             value={this.state.firstName}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             name="lastName"
//                             value={this.state.lastName}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="tel"
//                             placeholder="Phone Number"
//                             name="phoneNumber"
//                             value={this.state.phoneNumber}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             name="email"
//                             value={this.state.email}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Address"
//                             name="address"
//                             value={this.state.address}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Profile Picture Url"
//                             name="profilePic"
//                             value={this.state.profilePic}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <button type="submit">Add Contact</button>
//                     </div>
//                 </div>
//             </form>
//         )
//     }
// }

// export default ContactCreateForm;

