import styled from "styled-components";

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 200px;
    transition: all 0.3s ease;
`;

export const Slider = styled.div`
    .slick-slide:not(.slick-current) ${Text} {
        filter: blur(2px);
    }
`;
