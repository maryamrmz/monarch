import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 38rem;
    width: 100%;

    @media screen and (max-width: 900px) {
        height: 980px;
    }
`;
