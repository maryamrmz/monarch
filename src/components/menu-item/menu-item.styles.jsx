import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const bigContainer = css`
    margin-right: 5px;
    width: 45px;
    height: 45px;
    background: #00abaa;
    border: 2px solid #33bdb8;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }

    img {
        border-radius: 5px;
    }
`;

export const SmallContainer = styled.img`
    border-bottom-left-radius: 40px !important;
    position: absolute;
    top: 0;
    right: 0;
`;

const smallContainer = css`
    margin-right: 15px;
    width: 28px;
    height: 28px;
    border-radius: 5px;
    background: #0dadb2;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 1;
    }
`;

const getSize = (props) => {
    switch (props.name) {
        case "big":
            return bigContainer;
        case "small":
            return smallContainer;
        default:
            break;
    }
};

export const Size = styled(Link)`
    ${getSize}
`;
