import styled from "styled-components";

export const RegForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 16px;
    background-color: #efefef;
    max-width: 250px;
    margin: 30px auto;
    width: 100%;

    :disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
