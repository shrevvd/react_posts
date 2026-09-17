import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const handleClick = () => {
  console.log('Click!')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      {/* <div>
        <p> превыет</p>
        <button onClick={handleClick}> кнопочко нажми</button>
      </div> */}
      <App />
    </div>
);
