import styled from "styled-components";
import { Link } from "react-router";

export const BackLink = styled(Link)`
    position: absolute;
    left: 20px;
    top: 20px;
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

export const DeleteButton = styled.button`
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
        color: #c3c3c3;
        background: #8b0202ff;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CancelButton = styled.button`
   max-width: 100px;
   display:  flex;
   justify-content: center;
   align-items: center;
   color: #014b12;
   text-decoration: none;
   padding: 8px 16px;
   background: #ffffff;
   border: 1px solid #ddd;
   border-radius: 5px;
   margin-top: 12px;

   &:hover {
       cursor: pointer;
       color: #c3c3c3;
       background: #8b0202ff;
   }
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`

