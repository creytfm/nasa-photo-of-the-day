import React from 'react';
import styled from 'styled-components';
const Nasadiv = styled.div`
   color: blue;
   font-size: 4rem;
   font-family: monospace;
`;
const NASA = (props) => {
return(
<Nasadiv>
<div>
<h3>NASA Component</h3>
<p>Explanation</p>
</div>
</Nasadiv>
)
};

export default NASA;
