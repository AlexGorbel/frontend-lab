import styled from "styled-components";

export const Container = styled.div`
    max-width: ${({ maxwidth }) => maxwidth || '1440px'};
    padding: 0 30px;
    margin: 0 auto;
`