import styled from "styled-components";
import { Link } from "react-router";

export const BackLink = styled(Link)`
    position: absolute;
    left: 40px;
    top: 80px;
    display: inline-block;
    color: #8b0202ff;    
    text-decoration: none;
    padding: 8px 16px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background: #c3c3c3;
    }
`;

export const EditLink = styled(Link)`
   max-width: 100px;
   display:  flex;
   justify-content: center;
   align-items: center;
    color: #8b0202ff;    
    text-decoration: none;
    padding: 8px 16px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 12px;

    &:hover {
        cursor: pointer;
        background: #c3c3c3;
    }
`;


export const Image = styled.img`

    max-width: 200px;
    border-radius: 4px;
    float: left;
    margin-right: 20px;
    
`;

export const Text = styled.div`

    font-size: 16px;
    line-height: 1.5;

`;

