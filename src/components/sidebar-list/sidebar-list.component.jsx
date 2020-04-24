import React from "react";

import { LiContainer, ImgContainer, SpanContainer, LinkContainer } from "./sidebar-list.styles"

export const SidebarList = ({ name, src, img }) => {
    return (
        <LiContainer title={name}>
            <LinkContainer to='/sidebar'>
                <ImgContainer src={src} alt='' />
                <SpanContainer>{name}</SpanContainer>
            </LinkContainer>
            {img && (
                <LinkContainer to='/sidebar'>
                    <ImgContainer src={img} alt='' />
                </LinkContainer>
            )}
        </LiContainer>
    );
};
