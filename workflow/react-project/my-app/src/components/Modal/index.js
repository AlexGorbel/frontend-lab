import React from "react";
import * as S from './styled';

const Modal = ({ children, title, onClose }) => {

    return (
        <S.Wrapper>
            <S.Overlay onClick={onClose}/>
            <S.Modal>
                <S.Header>
                    <S.Title>{title}</S.Title>
                    <S.Close onClick={onClose}>
                        <S.Icon />
                    </S.Close>
                </S.Header>
                <S.Main>
                    {children}
                </S.Main>
            </S.Modal>
        </S.Wrapper>
    );
}

export default Modal;