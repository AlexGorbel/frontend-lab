import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    color: #ffffff;
    border: 1px solid #CDD6CF;
    background-color: #4CAF50;
    transition: all 0.3s ease;
    padding: 15px;
    min-width: 150px;
    text-align: center;
    line-height: 1.125;
    
    &:hover {
        color: #4CAF50;
        border-color: #4CAF50;
        background-color: #CDD6CF;
    }
`