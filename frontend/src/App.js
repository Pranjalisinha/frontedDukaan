import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='Heading'>Edit</h1>
        <div className='Buttons'>
          <Link to={"/Home"}> <button className='btn'><span class="material-symbols-outlined">
            task
          </span>Header</button></Link>
          <button className='btn'><span class="material-symbols-outlined">
            filter
          </span>Welcome Photo</button>
          <button className='btn'><span class="material-symbols-outlined">
            inventory
          </span>Product</button>
          <button className='btn'><span class="material-symbols-outlined">
            groups
          </span>Team</button>
          <button className='btn'><span class="material-symbols-outlined">
            contact_page
          </span>Contact Form</button>
          <button className='btn'><span class="material-symbols-outlined">
            location_on
          </span>Store Location</button>
          <button className='btn'><span class="material-symbols-outlined">
            event_note
          </span>Footer</button>
        </div>
        <h1 className='Heading'>Footer</h1>
      </div>
    </div>
  );
}

export default App;
