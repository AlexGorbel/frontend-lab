import styled from "styled-components";
import { ReactComponent as CloseIcon } from './assets/close.svg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 30px;
    z-index: 1000;
`

export const Overlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.38);
        z-index: -1;
`

export const Modal = styled.div`
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    background-color: #E0E0E0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 26px 22px 30px;
    background-color: #4CAF50;
`

export const Title = styled.h3`
    color: #CDD6CF;
    font-family: 'Quicksand', serif;
    font-size: 2rem;
    font-weight: 400;
`

export const Icon = styled(CloseIcon)`
    width: 26px;
    height: 26px;
    fill: #CDD6CF;
    transition: all 0.3s ease;
`

export const Close = styled.button`
    &:hover {
        ${Icon} {
            fill: #1B5E20;;
        }
    }
`

export const Main = styled.main`
        display: block;
`
