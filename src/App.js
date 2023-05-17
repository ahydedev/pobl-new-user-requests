import React from 'react';
import './App.css';
import NewUserRequestForm from './components/NewUserRequestForm';
import ManageUserRequests from './components/ManageUserRequests';
import { GlobalProvider } from './components/GlobalContext';
import './font/sofiapro-light.otf';


function App() {
  return (
    
    <GlobalProvider>

      <div className="app">
        <img src='/pobl-logo.png' className="App-logo" alt="logo" />
        <h2>New Starter Requests</h2>
        <div className="new-starter-components">
          <NewUserRequestForm />
          <ManageUserRequests />
        </div>
      </div>

    </GlobalProvider>

  );
}

export default App;
