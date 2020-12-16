import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0%;
    width: 100%;
    max-width: 1000px;
    padding: 32px;
    justify-content: center;

`

export const Content = styled.div`

    width: 100%;
    display: flex;           
    justify-content: space-between;

`

export const GridForgot = styled(Grid)`

    padding-top:15px;
    justify-content: flex-start;
    display: flex;

`;

export const GridRegister = styled(Grid)`

    padding-top: 40px;
    justify-content: flex-start;
    display: flex;

`;

export const GridSubmit = styled(Grid)`

    padding-top: 40px;
    justify-content: flex-end;
    display: flex;

`;






