import styled from "styled-components";

export const formContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 16px;
  background-color: #efefef;
  max-width: 250px;
  margin: 30px auto;
  width: 100%;
`

export const field = styled.div`
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 2px solid #8b0202ff;
  }
`;

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


export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;
