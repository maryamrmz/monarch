import styled, { css } from "styled-components";

const logoContainer = css`
    width: 33%;
    min-width: 230px;
    height: 78px;
    background: #1aa1d8;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        min-width: 70px;
        width: 70px;
    }

    .right {
        margin-right: 18px;

        img {
            transform: rotate(180deg);
            width: 7px;
            height: 10px;
            opacity: 0.5;
        }

        @media screen and (max-width: 900px) {
            display: none;
        }
    }

    .left {
        height: 34px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .text {
            margin-left: 7px;
            line-height: 1.5;
            font-size: 12px;

            p {
                font-weight: 650;
                font-size: 14px;
            }

            span {
                opacity: 0.7;
            }

            @media screen and (max-width: 900px) {
                display: none;
            }
        }
    }
`;

const demoContainer = css`
    width: 25%;
    min-width: 200px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        min-width: 25%;
    }

    .right {
        width: 28px;
        height: 28px;
        background: #1aa3d4;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        margin-right: 15px;

        img {
            transform: rotate(90deg);
            width: 6px;
            height: 10px;
        }

        @media screen and (max-width: 900px) {
            display: none;
        }
    }

    .left {
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 900px) {
            display: none;
        }
    }
`;

const getClassName = (props) => {
    switch (props.name) {
        case "logo":
            return logoContainer;
        case "demo":
            return demoContainer;
        default:
            break;
    }
};

export const Logo = styled.div`
    ${getClassName}
`;
