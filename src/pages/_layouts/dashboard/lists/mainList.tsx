import React from "react"
import { Settings as SettingsIcon } from '@material-ui/icons'
import { ListItemIcon, ListItem, ListItemText } from '@material-ui/core'

export const mainList = (

    <div>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Admin" />
        </ListItem>
    </div>

)