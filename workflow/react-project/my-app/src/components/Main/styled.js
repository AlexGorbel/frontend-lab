import styled from "styled-components";

export const Main = styled.main`
    background-color: #CDD6CF;
`

export const Section = styled.section`
    padding: 60px 0 119px 0;  
`

export const Title = styled.h1`
    color: #4CAF50;
    text-align: center;
    font-family: "Rochester", sans-serif;
    font-size: 6.25rem;
    line-height: normal;
    font-weight: normal;
    margin-bottom: 47px;
`

export const Wrapper = styled.div`
    overflow: hidden;
`

export const Grid = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: -30px;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const GridItem = styled.div`
    padding: 30px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Description = styled(GridItem)`
    font-size: 2rem;
    color: #1B5E20;
    text-align: center;
    width: 49.1155%;
    margin-bottom: 135px;
`

export const Image = styled(GridItem)`
    position: relative;
    width: 50.8845%;
    cursor: pointer;
`

export const Span = styled.span`
    display: block;
    position: absolute;
    bottom: 9%;
    right: 20%;
    width: 29%;
    color: #555555;
    text-align: center;
    transform: rotate(-15.814deg);
`
