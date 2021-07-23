import React, { useState } from 'react';
import './UserSignup.css';



const UserSignup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [investmentInterest, setInvestmentInterest] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const clear = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setInvestmentInterest(false);
  };

  return (
  

    
    
    <form className="UserSignup" onSubmit={handleSubmit}>
      <h1>Registro</h1>
      <label htmlFor="userName">Usuario</label>
      <input
        id="userName"
        placeholder="Usuario"
        name="userName"
        type="text"
        value={userName}
        required
        onChange={event => {
          setUserName(event.target.value);
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        id="Email"
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        required
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        required
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <label htmlFor="passwordConfirmation">Confirme Password</label>
      <input
        id="passwordConfirmation"
        placeholder="Confirme Password"
        name="passwordConfirmation"
        type="password"
        value={passwordConfirmation}
        required
        onChange={event => {
          setPasswordConfirmation(event.target.value);
        }}
      />
      <label htmlFor="investmentInterest" className="UserSignup--checkbox">
        <input
          id="investmentInterest"
          name="investmentInterest"
          type="checkbox"
          checked={investmentInterest}
          onChange={event => setInvestmentInterest(event.target.checked)}
        />
        Quiero estar informado de los últimos eventos y promociones
      </label>
      <input className= 'submitBtn' type="Submit" />
    </form>
  );
};

export default UserSignup;