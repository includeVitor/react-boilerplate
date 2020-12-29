import React from 'react'
import { PaperSmart, ISmartDataPaper } from './styles'

 
const SmartDataPaper: React.FC<ISmartDataPaper> = ({ children, height }) => {
    return (  

        <PaperSmart height={height}>
            { children }
        </PaperSmart>

    )
}
 
export default SmartDataPaper