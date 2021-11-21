import React from "react";

import styled from "styled-components";
// import * as types from "styled-components/cssprop";

const StyledButton = styled.button`
  /* 공통 스타일 */
  /* 왜 inline-flex하면 예시대로 안 됨? */
  display: inline;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

interface ButtonProps {
  children: string;
}

function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
