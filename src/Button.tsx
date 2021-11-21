import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css<{ color: string }>`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
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

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

// https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
type sizeType = "large" | "medium" | "small";

const sizeStyles = css<{ size: string }>`
  ${({ size }) => css`
    height: ${sizes[size as sizeType].height};
    font-size: ${sizes[size as sizeType].fontSize};
  `}
`;

const StyledButton = styled.button<{ color: string; size: string }>`
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
  ${sizeStyles}

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
  size: string;
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

function Button({ children, color, size, ...rest }: ButtonProps) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
