import styled from "styled-components";
import { Link } from "react-router-dom";

export const LiContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.9rem;
    width: 14rem;

    &:hover {
        transition: all 0.5s;
        transform: scale(1.1);
        opacity: 1;
    }
`;

export const SpanContainer = styled.span`
    color: #aaafb6;
    margin-left: 10px;
`;
export const LinkContainer = styled(Link)`
    display: flex;
    align-items: center;
`;

export const ImgContainer = styled.img`
    margin-left: 12px;
`;
