import styled from "styled-components"

export const Logo = styled.div`
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    b{
        width: fit-content;
        color: var(--sub-active);
        position: relative;
        z-index: 2;
        font-size: 100px;

        &::after{
            content: "B";
            position: absolute;
            left: -5px;
            bottom: -5px;
            color: var(--active);
            z-index: -1;
        }
    }

    span{

    }

    p{
        
    }
` 