import React, { StrictMode, useState } from 'react';
import LoginView from './pages/Login';
import RegisterForm from './components/RegisterForm';

function App() {

  const[showRegister, setShowRegister]=useState(false);

  /*<LoginView />*/
  if (showRegister)
  {
      alert("hola")
      return (
        <StrictMode>
            <RegisterForm />
        </StrictMode>
      );
  }
  else
  {
    alert("chau")
    return (
      <StrictMode>
          <LoginView setShowRegister={setShowRegister} />
      </StrictMode>
    );
  }

};

export default App;
