import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { Button } from "@material-ui/core"


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0%;
    width: 100%;
    max-width: 450px;
    padding: 32px;
    justify-content: center;

`

export const TitleRecovery = styled(Typography)`

    text-align: center;
    font-weight: bold !important;
    padding-bottom: 20px;
`

export const ForgotButton = styled(Button)`

    margin-top: 8px !important;

`
export const TitleBack = styled(Typography)`

    margin-top: 12px !important;
    text-align: center;

`