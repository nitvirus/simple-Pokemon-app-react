import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState(25);
  const [name, setName] = useState();
  const [img, setImg] = useState();
  useEffect(() => {
    // alert("hi");
    var url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    //console.log(url);
    var img_Url = `https://pokeres.bastionbot.org/images/pokemon/${num}.png`;
    async function getData() {
      const resp = await axios.get(url);
      const img_rsp = await axios.get(img_Url);
      // console.log(resp.data.name);
      setName(resp.data.name);
      setImg(resp.data.sprites.front_default);
      //console.log(img_rsp);
      var imageURI = resp.data.sprites.front_default;
    }
    getData();
  });
  return (
    <React.Fragment>
      <div className="body">
        <div className="contaniner">
          <h1>Pokemon API call</h1>
          <label>Please select pokemon number </label>

          <select
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          >
            {/* console.log(num); console.log(setNum); */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {/* <div className="input">
            <input type="text"></input>
            <button>FIND</button>
          </div> */}
          <h2>Name is {name}</h2>
        </div>
        <img src={img}></img>
      </div>
    </React.Fragment>
  );
};

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
export default App;
