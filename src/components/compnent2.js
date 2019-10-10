
import React from "react";

const Component2 = props => {
return (
<div className="pic1" key={props.id}>
<img src={props.image}alt="this rocks"></img>
<p>Title:{props.title}</p>
</div>
)
}

export default Component2;