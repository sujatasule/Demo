import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Math(){
let x=5;
let y=10;
return (x+y);
}
var person=(
  <div className="myClass">
    <h1>Hello World</h1>
    <p>This is my first react app</p>
  </div>
);


function Person(props){
  return(
    <div className="girls">
    <h1>{props.name}</h1>
    <p> Age:{props.age}</p>
      <p> Hair color:{props.color}</p>
      </div>
  );
}

var data=(
  <div>
  <Person name="Katrina" age="29" color="blonde"/>
  </div>
  
)

ReactDOM.render(data, document.querySelector('#data'));
ReactDOM.render(<Math />, document.getElementById('math'));
ReactDOM.render(person, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
