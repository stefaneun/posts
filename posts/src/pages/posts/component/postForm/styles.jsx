import styled from "styled-components";

export const textArea = styled.textarea`
  resize: none;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 14px;

  outline: none;

  &:focus {
    border: 2px solid #8b0202ff;
  }
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;
