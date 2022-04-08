import React, { useState } from 'react'
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  var callAPI = (firstName, lastName) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ "firstName": firstName, "lastName": lastName });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch(" https://w2i0q8t5wk.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI(firstName, lastName);
    setFirstName('');
    setLastName('');
  }

  return (
    <div >
      <h2 style={{ textAlign: 'center' }}>A simple web application that has a React frontend, which triggers a lambda function when a user submits the form. An API Gateway is connecting the front-end & back-end, the data( firstname, lastname) submitted by the user is stored in DynamoDB and this App is deployed on AWS Amplify. </h2>
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
  );
}

export default App;
