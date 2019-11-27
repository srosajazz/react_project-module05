import styled from "styled-components";

export const Title = styled.h1`
    color: ${props => (props.error ? "red" : "#1a8bf0")};
    font-size: 24px;
    font-family: Arial, Heveltica, sans-serif;

    small {
        font-size: 14px;
        color: #333;
    }
`;

// #1a8bf0;
// #dde5ea;
// #ccd6dd;
// #4d5c69;
// #fac73b;
// #1c2023
