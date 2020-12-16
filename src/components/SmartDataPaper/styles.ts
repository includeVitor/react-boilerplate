import styled from 'styled-components'

export interface ISmartDataCardProps{
    maxWidth?: number,
    border?: boolean,
    background?: boolean,
    padding?: number
}


export const Paper = styled.div<ISmartDataCardProps>`

    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    max-width: ${props => (props.maxWidth) ? (props.maxWidth) : 480}px;
    align-items: center;
    padding: ${props => (props.padding) ? (props.padding) : 5}px;
    border-radius: ${props => (props.border) ? 5 : 0}px;
    border: ${props => (props.border) ? '1px solid #dadce0' : ''};
    background-color: ${props => (props.background) ? '#fff' : ''};
    
`;