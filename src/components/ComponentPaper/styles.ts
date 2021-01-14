import styled from 'styled-components'
import { Paper } from '@material-ui/core'


export interface IPaperComponent{
    height?: number
}

export const PaperComponent = styled(Paper)<IPaperComponent>`

    padding: 10px;
    display: flex;
    overflow: auto;
    flex-direction: column;
    height: ${(props : IPaperComponent) => (props.height) ? props.height : 240}px;

`