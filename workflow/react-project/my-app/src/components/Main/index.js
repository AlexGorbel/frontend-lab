import React, {useState} from "react";
import * as S from './styled';
import Container from "../Container";
import Image from "./assets/coctail.png";
import Modal from "../Modal"
import Slider from "../Slider"

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelClick = () => {
    setIsOpen(true);
  }

  return (
    <S.Main>
      <S.Section>
        <Container maxwidth='1304px'>
          <S.Title>Cocktail App</S.Title>
          <S.Wrapper>
            <S.Grid>
              <S.Description>
                <Slider />
              </S.Description>
              <>
                <S.Image role="button" onClick={handelClick}>
                  <img src={Image} alt="asd"/>
                  <S.Span>Press on glass to get a random cocktail</S.Span>
                </S.Image>
                {isOpen && (
                  <Modal onClose={() => setIsOpen(false)} title='Random Coctail'>
                    Main Content
                  </Modal>
                )}
              </>
            </S.Grid>
          </S.Wrapper>
        </Container>
      </S.Section>
    </S.Main>
  );
}

export default Main;