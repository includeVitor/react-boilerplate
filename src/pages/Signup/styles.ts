import styled from 'styled-components'
import { EqualizerRounded } from '@material-ui/icons';
import { Typography, Grid } from  "@material-ui/core"


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
export const EqualizerRoundedIcon = styled(EqualizerRounded)`

    font-size: 75px !important;
    padding-bottom:10px;

`

export const SignupTitle = styled(Typography)`

    text-align: center;
    font-weight: bold !important;

`

export const GridRegister = styled(Grid)`

    display: flex;
    justify-content: flex-end;
    padding-top: 15px;

`

export const TitleBack = styled(Typography)`

    padding-top: 25px;
    text-align: start;

`
