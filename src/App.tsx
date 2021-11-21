import React from "react";
import styled from "styled-components";
// eslint-disable-next-line
import * as types from "styled-components/cssprop";

const Circle = styled.div<{ huge: boolean }>`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    `
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color="red" huge />;
}

export default App;
