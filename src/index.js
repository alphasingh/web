import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import LoginForm from "./Components/SellerLogin";
//import ValidatedLoginForm from "./Components/ValidatedLoginForm";

/* const COLORS = ['white', 'red', 'blue', 'black', 'cream'];

function RegisterForm() {
  return (
    <form>
      <h2>Register Your details</h2>

      <label>Name*:</label>
      <input />

      <label>Color*:</label>
      <select>
        <option value="">Select color</option>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>Age*:</label>
      <input />

      <label>Habits:</label>
      <textarea />

      <button type="submit">Submit</button>
    </form>
  );
} **/ 

/*
import { useState } from 'react';

const COLORS = ['white', 'red', 'blue', 'black', 'cream'];

function RegisterForm() {
  const [values, setValues] = useState({
    name: '', color: '', age: '', habits: '' 
  });

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };

  return (
    <form>
      <h2>Register Your Cat</h2>

      <label>Name*:</label>
      <input value={values.name} onChange={set('name')} />

      <label>Color*:</label>
      <select value={values.color} onChange={set('color')}>
        <option value="">Select color</option>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>Age*:</label>
      <input value={values.age} onChange={set('age')} />

      <label>Habits:</label>
      <textarea value={values.habits} onChange={set('habits')} />

      <button type="submit">Submit</button>
    </form>
  );
}
 **/
/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      middlename: '',
      lastname: '',
      emailid: '',
      contact: '',
      address: '',
      area: '',
      zipcode: '',
      
    };
  } **/
  /* mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  } **/

  /*
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Buyer Details </h1>
      <p>First Name:</p>
      <input
        type='text'
        name='firstname'
        placeholder="enter your first name"
        onChange={this.myChangeHandler}
      />
      <p>Middle Name:</p>
      <input
        type='text'
        name='middlename'
        placeholder="enter your middle name"
        onChange={this.myChangeHandler}
      />
      <p>Last Name:</p>
      <input
        type='text'
        name='lastname'
        placeholder="enter your last name"
        onChange={this.myChangeHandler}
      />
      <p>Email ID:</p>
      <input
        type='email'
        name='emailid'
        placeholder="enter your email id"
        onChange={this.myChangeHandler}
      />
      <p>Contact Number:</p>
      <input
        type='number'
        name='contact'
        placeholder="enter your phone no."
        onChange={this.myChangeHandler}
      />
      <p>Address:</p>
      <input
        type='text'
        name='address'
        placeholder="enter home address"
        onChange={this.myChangeHandler}
      />
      <p>Area/Near By Locality:</p>
      <input
        type='text'
        name='area'
        placeholder="enter your area or locality"
        onChange={this.myChangeHandler}
      />
      <p>Zipcode:</p>
      <input
        type='number'
        name='zipcode'
        placeholder="enter your area zipcode"
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' bgcolor='Green' />
      </form>
    );
  }
}

**/


/* ReactDOM.render(<MyForm />, document.getElementById('root')); **/

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
/*
ReactDOM.render(
  <RegisterForm />,
  document.getElementById('root')
); **/
