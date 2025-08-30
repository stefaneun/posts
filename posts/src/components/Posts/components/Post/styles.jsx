import styled from "styled-components";
import { Link } from "react-router";

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
`;

export const Image = styled.div`

    img{
        max-width: 200px;
        border-radius: 4px;
    }
    
`;

export const PostTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`

export const DetailLink = styled(Link)`
    color: #000;
    text-decoration: none;

    &:hover {
        color: #8b0202ff;
        transition: color 0.2s ease;
    }
`