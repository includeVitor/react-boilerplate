import styled from 'styled-components'
import { Paper } from '@material-ui/core'


export interface ISmartDataPaper{
    height?: number
}

export const PaperSmart = styled(Paper)<ISmartDataPaper>`

    padding: 10px;
    display: flex;
    overflow: auto;
    flex-direction: column;
    height: ${props => (props.height) ? props.height : 240}px;

`