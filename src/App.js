import React from 'react';
//import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Application</h1>
        <p>Welcome to the Blog App. Use the navigation to sign in, sign up, or view posts.</p>
      </header>

      {/* Main content area */}
      <main>
        <SignUp />
        <SignIn />
      </main>

      <footer>
        <p>© 2024 Blog Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
