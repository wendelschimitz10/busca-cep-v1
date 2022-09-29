import styled from 'styled-components'

export const AppContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--bg-gradient-dark);
`

export const ResultData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    width: 95%;
    height: auto;
    border-radius: 16px;
`

export const MainTitle = styled.h2`
    margin: 16px 0;
    font-size: 39px;
`

export const Subtitle = styled.span`
    margin-bottom: 16px;
    font-weight: bold;
`