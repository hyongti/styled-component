import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }: any) => {
    const selected = theme.palette[color as string];
    return `
    background: ${selected};
    &:hover {
      background: ${lighten(0.1, selected)};
    }
    &:active {
      background: ${darken(0.1, selected)};
    }
  `;
  }}
`;

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
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

interface ButtonProps {
  children: string;
  color: string;
}

Button.defaultProps = {
  color: "blue",
};

function Button({ children, color, ...rest }: ButtonProps) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
