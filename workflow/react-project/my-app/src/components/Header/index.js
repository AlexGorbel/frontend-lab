import React from "react";
import * as S from './styled';
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <S.Header id='header'>
            <Container>
                <S.Grid>
                    <S.GridItem>
                        <Logo />
                    </S.GridItem>
                    <S.GridItem>
                        <Navigation />
                    </S.GridItem>
                </S.Grid>
            </Container>
        </S.Header>
    );
}

export default Header;