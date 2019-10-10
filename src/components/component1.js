import React, {useState, useEffect} from "react";
import axios from "axios";
import Component2 from "./Component2";
import styled from 'styled-components';


export default function Component1(){
const [comp1 , setComp1] = useState([]);

useEffect(() => {
axios
.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
.then(response =>{
const comp1 = response.data
console.log("Daily Photo", comp1);
setComp1(comp1);
console.log(response);
})
.catch(error => {
console.log("data not returned", error)
})
}, [])

const WrapperDiv = styled.div`
   color: blue;
   font-size: 4rem;
   font-family: monospace;
`;

return(

<div>
<WrapperDiv>
<h1>picture of the day</h1>
</WrapperDiv>
<Component2
key={comp1.id}
image={comp1.url}
title={comp1.title}
/>
</div>

)
};
