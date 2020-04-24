import React from "react";

import {
    BoxesContainer,
    HeaderContainer,
    DollarContainer,
    MainContainer,
    ContentContainer,
    FooterContainer,
    Percent,
    Box,
    TextContainer,
} from "./dashboard-item.styles";

export const DashboardItem = ({
    dollar,
    percentColor,
    percent,
    text,
    src,
    footer,
    box,
    name,
    img,
}) => {
    return (
        <BoxesContainer>
            <HeaderContainer>
                <DollarContainer>{dollar}</DollarContainer>
                <Percent percentColor={percentColor}>{percent}</Percent>
            </HeaderContainer>
            <MainContainer>
                <span>{text}</span>
            </MainContainer>
            <ContentContainer>
                <img src={src} alt='' />
            </ContentContainer>
            <FooterContainer>
                <TextContainer to='/'>{footer}</TextContainer>
                <Box to='/' boxColor={box} title={name}>
                    <img src={img} alt='' />
                </Box>
            </FooterContainer>
        </BoxesContainer>
    );
};
