import React from 'react'
import { Paper, ISmartDataCardProps } from './styles'

const SmartDataPaper: React.FC<ISmartDataCardProps> = ({children, maxWidth, border, background, padding}) => {

    return(
    
        <Paper maxWidth={maxWidth} border={border} background={background} padding={padding}>
            {children}
        </Paper>
    )
}


export default SmartDataPaper