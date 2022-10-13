import React from 'react'
import './App.css';
import CTA from './CTA';

function App() {
  return (
    <div >
       <CTA>
            <h1>This is an important CTA</h1>
            <button>Click me now!</button>
       </CTA>
       <CTA>
        <form>
          <input type="email" placeholder="Enter Email"/>
          <br />
          <button>Submit</button>
        </form>
       </CTA>
    </div>
  );
}

export default App;
