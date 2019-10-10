import React from "react";
import Component1 from "./components/Component1"
import "./App.css";
import styled from 'styled-components'

const Div = styled.div`
   color: blue;
   font-size: 4rem;
   font-family: monospace;
`;

function App() {

return(
<div className="App">
 <Div>   
<h1>Nasa</h1>
</Div>
<Component1 />
</div>
);
}

export default App;

