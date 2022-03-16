import styled from "styled-components"

export const P = styled.p`
    position: relative;
    padding-left: 50px;
    margin: 1.5rem 0;

    &::before{
        content: '<p>';
        font-family: 'La Belle Aurore',cursive;
        position: absolute;
        color: var(--text-after);
        top: 0;
        left: 0;
        margin-top: -30px;
        margin-left: 30px;
        font-size: 20px;
    }

    &::after{
        content: '</p>';
        font-family: 'La Belle Aurore',cursive;
        position: absolute;
        color: var(--text-after);
        left: 0;
        bottom: 0;
        margin-bottom: -30px;
        margin-left: 30px;
        font-size: 20px;
    }
`