import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return (
    <button>Click Me!</button>
  );
}
const element = <CustomButton />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
