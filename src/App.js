import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [Gender, setGender] = useState('');

  function handleOnChange(e) {
    //console.log(e.target.value)
    var userGender = document.getElementById('Gender').value;
    setGender(userGender);
  }

  function handleSubmit() {
    //get users age
    var birthDate = document.getElementById("birthDate-input").value;
    const date1 = new Date(birthDate);

    var days = Math.floor(Date.now() - date1) / (1000 * 60 * 60 * 24);

    var months = days / 31;
    var years = months / 12;
    var age = "age " + Math.round(years) + " months " + Math.round(months % 12) + " days: " + Math.round(days % 360, 0);
    //console.log(age);
    //console.log(birthDate);

    axios.post("http://localhost:3001/insert", {
      age: years,
      gender: Gender
    }).then(response => { console.log(response.data) })
  }

  return (
    <div>
      <section>
        <label className='Gender-label'> Gender</label>
        <select className='Gender' id='Gender' onChange={handleOnChange}>

          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className='birthDate-container'>
          <label className='birthDate-label'> Birth date</label>
          <input className='birthDate-input' id="birthDate-input" type="date"></input>
          <button onClick={handleSubmit} className='submit-btn'>Submit</button>

        </div>
      </section>
    </div>
  );
}


export default App;
