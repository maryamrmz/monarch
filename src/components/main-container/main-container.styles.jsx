import styled from "styled-components";

export const ColumnsContainer = styled.div`
    height: calc(100% - 78px);
    width: 100%;
    display: flex;
`;

export const LeftColumnContainer = styled.div`
    order: 1;
    flex: 13;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const RightColumnContainer = styled.div`
    order: 2;
    flex: 87;
    min-width: 300px;
    padding: 1.2rem 2.5rem;
    display: flex;
    flex-direction: column;
`;
