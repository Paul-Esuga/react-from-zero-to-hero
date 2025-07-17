// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import "./App.css";

// const name = "Guillame";

const Card = ({ title }: { title: string }) => {
  const [rating, setRating] = useState(true)
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log(title + ' ' + count)
  })

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title}</h2>
      <button onClick={() => setRating(!rating)} className="like-button">
        {rating ? '❤️' : "🤍"}
      </button >
    </div >
  )
}


const App = () => {
  return (
    <>
      {/* <h2>Functional Arrow components</h2> */}
      <div className="card-container">
        <Card title="Star Wars" />
        <Card title="The Old guard" />
        <Card title="Avengerss" />
      </div>
    </>
  )
}

export default App;

// function App() {
//   //1. Javascript
//   const [count, setCount] = useState(0);
//   console.log(name);
//   const title = "React";
//   const bool = true;
//   const list = ["lovely", 2, "hey", "John"];
//   const person = {name: "Guillame", age: 5 };
//   const fruits = ["Apples", "Oranges", "Peaches", "Coconuts", "Oranges"];
//   const objs = [
//     {
//       name: "Apple",
//     },
//     {
//       name: "Orange",
//     },
//     {
//       name: "Grape",
//     },
//   ];
//   let c = 1;
//   const [backgroundColor, setBackgroundColor] = useState("green");
//   //2. React hooks

//   //3. JSX
//   return (
//     <>
//       <ul>
//         {objs.map((obj, index) => (
//           // console.log(c + ' ' + fruit)
//           // c++
//           // document.getElementsByClassName('fruit').innerText = `c + ' ' + fruit`
//           <li key={index}>
//             <span>Fruit: {obj.name} </span>
//             {/* <br></br><span>Color: {obj.color} </span>
//             <br></br><span>Type: {obj.options.title} </span>
//             <br></br> */}
//           </li>
//         ))}
//       </ul>
//       <div
//         style={{
//           backgroundColor
//         }}
//       >
//         <h1>Hey Reacter</h1>
//         <p>New paragraph</p>
//         <button onClick={() => setBackgroundColor("blue")}>Change color</button>
//       </div>
//       {/* <h1> This is my course</h1 >
//       <div >
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>{title}</h1>
//       <div>{list.find((pers) => pers === 'John')}</div>
//       <div>{person.name}{' '}{person.age + 10}</div>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   );
// }


