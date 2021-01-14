import React from 'react'
import { Brightness4 as DarkIcon, Brightness7 as LightIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { toggleTheme } from '../../store/modules/theme'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { IThemeType } from '../../store/modules/theme/types'

const ComponentTheme: React.FC = () => {

    const AppTheme  = useSelector((state : RootState) => (state.theme.type))

    return (
        <>
            <IconButton color="inherit" component="span" onClick={(e : any) => toggleTheme(e)}>
                { ( AppTheme === IThemeType.light ) ? <DarkIcon/> : <LightIcon/> }
            </IconButton>
        </>
    )
}

export default ComponentTheme