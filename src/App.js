import logo from './logo.svg';
import './App.css';
import { useState, useReducer , useEffect } from 'react';

function Header(props){
  // props is object  
  // use state 
  const [states, setStates] = useState("happy");
  const [checked, toggle] = useReducer(
    (checked) => !checked
    ,false
    );

  return (
    <>
    <h1>Hello World</h1>
    <h2>{props.esiName}</h2>
    <h2>state now : {states} .</h2>
    <button onClick = {()=> setStates("bad")}>Click Bad</button>
    <button onClick = {()=> setStates("happy")}>Click Happy</button>
    <input type="checkbox" value={checked} onChange={toggle}></input>
    {(checked)?<h1>Check</h1>:<h1>uncheck</h1>}
    </>
  );
}

const dishes = [
  "Apple","Banana","Ananas","Mongue"
];

let dishesObj = dishes.map((d,i)=>({id:i,name:d}));

function Body(p){
  return <> 
  <h3> this is a body </h3> 
  <ul style = {{textAlign:"left",background:"red",color:"blue"}}>
    {p.dishes.map((d,index)=>(<li key={index}>{d}</li>))}
  </ul>
  </>
}
function Other(p){
  return (
    <ul style = {{textAlign:"center",background:"yellow",color:"green"}}>
    {p.dishes.map((d)=>(<li key={d.id}>{d.name}</li>))}
    </ul>
  );
}

function fetchUser(){

  const [data, setData ] = useState(null);

  useEffect(() => {
     fetch(`https://api.github.com/users/wycats`)
     .then( (response) => response.json())
     .then(setData);
  },[]);

  
  if(data){
    return <div>{JSON.stringify(data)}</div>;
  }
  return <div> NO Data</div>;
  


}

function App() {

  const [data, setData ] = useState(null);

  useEffect(() => {
     fetch(`https://api.github.com/users/wycats`)
     .then( (response) => response.json())
     .then(setData);
  },[]);

  
  if(data){
    return (<div>{JSON.stringify(data)}</div>);
  }
  return (<div> NO Data</div>);
  

  // return (
  //   <div className="App">
  //     <fetchUser />
  //     {/* <Header esiName="ESI Alger"/>
  //     <Body dishes = {dishes}/>
  //     <Other dishes = {dishesObj}/>
  //     <img src = {logo} height = {200} alt="img"></img> */}
  //   </div>
  // );
}

export default App;
