import React from 'react'
import { Paper, SmartDataCardProps } from './styles'

const SmartDataPaper: React.FC<SmartDataCardProps> = ({children, maxWidth, border, background, padding}) => {

    return(
    
        <Paper maxWidth={maxWidth} border={border} background={background} padding={padding}>
            {children}
        </Paper>
        
    )
}


export default SmartDataPaper