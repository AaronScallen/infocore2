import './App.css';
import Button from '@mui/material/Button'
import { useState } from 'react';
import FirebaseAuthService from './FirebaseAuthService';
import LoginForm from './components/LoginForm';


function App() {
  const [user, setUser] = useState(null)

  FirebaseAuthService.subscribeToAuthChanges(setUser);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
      </header>
      <body>
      <LoginForm existingUser={user}></LoginForm>
      <Button variant="contained">Hi!</Button>
      </body>
    </div>
  );
}

export default App;
