import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: #8b0202ff;
  color: white;
  cursor: pointer;

  &:hover {
    background: #550101;
    transition: background 0.2s ease;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;