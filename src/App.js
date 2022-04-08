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
  }

  return (
    <div >
      <form >
        <label htmlFor='firstName'>First Name :</label>
        <input
          type="text"
          id="firstName"
          name="fname"
          placeholder="Your First name.."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        <label htmlFor='lastName'>Last Name :</label>
        <input
          type="text"
          id="lastName"
          name='lname'
          placeholder="Your Last name.."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}  >Call API</button>
      </form>
    </div>
  );
}

export default App;
