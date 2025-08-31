import React from "react";
import { NavLink } from "react-router";
import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    
`;

export const MenuItem = styled(NavLink)`
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    color: #000000ff;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid #dbd9d9ff;
    max-width: 120px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;   

    &:hover {
        background: #8b0202ff;
        transition: background 0.2s ease;
        color: #ffffffff;
        
        
    }

    &.active {
        font-weight: bold;
        border-bottom: 2px solid #000;
    }
`;
