import React from "react";
import styled from 'styled-components'

const ImgStyle = styled.img`
border-radius: 7px;
height: 50%;
width: 50%;
`



const Component2 = props => {
return (

<div className="pic1" key={props.id}>
<ImgStyle src={props.image}alt="this rocks"></ImgStyle>
<p>Title:{props.title}</p>
<p>Date:{props.date}</p>
<p>Explanation:{props.explanation}</p>
</div>
)
} 

export default Component2;