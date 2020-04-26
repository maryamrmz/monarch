import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const percentColor = css`
    color: #fff;
    width: 39px;
    height: 17px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const mainColor = css`
    width: 35px;
    height: 32px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxesContainer = styled.div`
    width: 30%;
    border: 1px solid #dfe8f1;
    border-radius: 3px;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 3%;
    }
`;

export const HeaderContainer = styled.div`
    width: 90%;
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DollarContainer = styled.span`
    font-size: 30px;
    color: #404a57;
`;

const percentGreenContainer = css`
    ${percentColor}

    background: #2ecc71;
`;

const percentRedContainer = css`
    ${percentColor}

    background: #e74c3c;
`;

const percentOrangeContainer = css`
    ${percentColor}

    background: #e67e22;
`;

const getPercentColor = (props) => {
    switch (props.percentColor) {
        case "percent-green":
            return percentGreenContainer;
        case "percent-red":
            return percentRedContainer;
        case "percent-orange":
            return percentOrangeContainer;
        default:
            break;
    }
};

export const Percent = styled.span`
    ${getPercentColor}
`;

export const MainContainer = styled.div`
    height: 40px;
    width: calc(100% - 26px);
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    opacity: 0.7;
`;

export const ContentContainer = styled.div`
    height: 131px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;

        @media screen and (max-width: 900px) {
            width: 70%;
        }
    }
`;

export const FooterContainer = styled.div`
    height: 72px;
    width: calc(100% - 26px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #a7b6be;
    font-size: 20px;
`;

export const TextContainer = styled(Link)`
    &:hover {
        text-decoration: underline;
        color: #008fe2;
        opacity: 1;
    }
`;

const blueBoxContainer = css`
    ${mainColor}

    background: #3498db;
`;

const whiteBoxContainer = css`
    ${mainColor}

    background: #fff;
    border: 1px solid #dfe8f1;
    border-radius: 5px;
`;

const greenBoxContainer = css`
    ${mainColor}

    background: #00bca4;
    border: 1px solid #00a792;
`;

const getBoxColor = (props) => {
    switch (props.color) {
        case "blue-box":
            return blueBoxContainer;
        case "white-box":
            return whiteBoxContainer;
        case "green-box":
            return greenBoxContainer;
        default:
            break;
    }
};

export const Box = styled(Link)`
    ${getBoxColor}
`;
