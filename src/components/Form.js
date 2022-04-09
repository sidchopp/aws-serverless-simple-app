import React, { useState } from 'react'

//Components
import callAPI from './CallAPI';

const Form = () => {
  // States
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI(firstName, lastName);
    setFirstName('');
    setLastName('');
  }
  return (
    <div className='container page'>
      <h2 style={{ textAlign: 'center' }}>A simple Form </h2>
      <p>It has a React frontend, which triggers a lambda function when a user submits the form. An API Gateway is connecting the front-end & back-end, the data( firstname, lastname) submitted by the user is stored in DynamoDB and this App is deployed on AWS Amplify. </p>
      <form onSubmit={handleSubmit}  >
        <label htmlFor='firstName'>First Name :</label>
        <input
          type="text"
          id="firstName"
          name="fname"
          required
          placeholder="Your First name.."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        <label htmlFor='lastName'>Last Name :</label>
        <input
          type="text"
          id="lastName"
          name='lname'
          required
          placeholder="Your Last name.."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className='button' type="submit"  >Call API</button>
      </form>
    </div>
  )
}
export default Form;