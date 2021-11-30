import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css<{ color: string; outline: boolean }>`
  ${({ theme, color, outline }) => {
    const selected = theme.palette[color];
    return `
    background: ${selected};
    &:hover {
      background: ${lighten(0.1, selected)};
    }
    &:active {
      background: ${darken(0.1, selected)};
    }
    ${outline &&
      `
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background: ${selected};
          color: white;
        }
      `}
  `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem"
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem"
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem"
  }
};

// https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
type sizeType = "large" | "medium" | "small";

const sizeStyles = css<{ size: string }>`
  ${({ size }) => css`
    height: ${sizes[size as sizeType].height};
    font-size: ${sizes[size as sizeType].fontSize};
  `}
`;

const fullWidthStyle = css<{ fullWidth: boolean }>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button<{
  color: string;
  size: string;
  outline: boolean;
  fullWidth: boolean;
}>`
  /* 공통 스타일 */
  /* 왜 inline-flex하면 예시대로 안 됨? */
  display: inline-flex;
  align-items: center;
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

  /* 가로로 긴 버튼 */
  ${fullWidthStyle}
`;

interface ButtonProps {
  children: ReactNode;
  color: string;
  size: string;
  outline: boolean;
  fullWidth: boolean;
  onClick?: () => void;
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
  outline: false,
  fullWidth: false
};

function Button({
  children,
  color,
  size,
  outline,
  fullWidth,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
