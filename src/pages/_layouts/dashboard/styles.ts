import styled from 'styled-components'
import { Toolbar, Typography } from '@material-ui/core'
import { withTheme } from "@material-ui/core/styles"

export interface IAppBarProps{
    open: boolean
}

export const ToolbarSmart = styled(Toolbar)`

    padding-right: 24px;

` 

export const WrapperSmart = styled.div`

    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    min-height: 100vh;

`

export const ToolbarIconSmart = withTheme(styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 8px;
    ${props => props.theme.mixins.toolbar};
    
`)

export const TypographySmart = styled(Typography)`
    
    flex-grow: 1;

`
export const ContentSmart = withTheme(styled.main`

    flex-grow: 1;
    height: 100vh;
    overflow: auto;
    ${props => props.theme.mixins.toolbar};

`)


export const AppSpaceBarSmart =  withTheme(styled.div`
    
    ${props => props.theme.mixins.toolbar};

`)