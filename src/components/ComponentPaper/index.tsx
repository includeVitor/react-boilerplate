import React from 'react'
import { PaperComponent, IPaperComponent } from './styles'

 
const ComponentPaper: React.FC<IPaperComponent> = ({ children, height }) => {
    return (  

        <PaperComponent height={height}>
            { children }
        </PaperComponent>

    )
}
 
export default ComponentPaper