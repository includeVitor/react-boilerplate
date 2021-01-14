import React from 'react'
import { useState } from 'react'

import ComponentTheme from '../../../components/ComponentTheme'

//Styled Components
import { ToolbarSmart, WrapperSmart, ToolbarIconSmart, TypographySmart, ContentSmart, AppSpaceBarSmart } from './styles'

//Material UI
import { AppBar, IconButton, Menu, MenuItem, makeStyles, Drawer, Divider, List, Grid, Container } from '@material-ui/core'
import { Menu as MenuIcon,  MoreVert as MoreIcon, ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

//Services
import { authService } from '../../../services/authService'

//clsx
import clsx from 'clsx'

//Self Components
import { lists } from './lists'


const SmartDataAppBar: React.FC = ({ children }) => {

    const drawerWidth = 240;
    const menuId = 'primary-search-account-menu';
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [open, setOpen] = useState(false)
    const isMenuOpen = Boolean(anchorEl)
    
    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)
    const handleProfileMenuOpen = (e : React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
    
    const handleMenuClose = () => setAnchorEl(null)
    const handleMenuLeave = () =>{
        setAnchorEl(null)
        authService.logoutUser()
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuLeave}>Sair</MenuItem>
        </Menu>
    )

    const useStyles = makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        drawerPaper: {
            minHeight: '100vh',
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9),
            },
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        }
    }))   

    const classes = useStyles()

    return (
        <>
            <WrapperSmart>

                <AppBar color="inherit" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <ToolbarSmart>

                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <TypographySmart variant="h6" color="inherit" noWrap>
                            Dashboard
                        </TypographySmart>

                        <IconButton
                            edge="end"
                            color="inherit"
                        >
                            <ComponentTheme/>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            >
                            <MoreIcon />
                        </IconButton>
                        
                    </ToolbarSmart>
                </AppBar>
                
                {renderMenu}

                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                    }}
                >
                    <ToolbarIconSmart>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </ToolbarIconSmart>

                    <Divider />

                    <List>{lists.mainList}</List>

                </Drawer>

                <ContentSmart>
                    
                    <AppSpaceBarSmart/>

                    <Container maxWidth="lg" className={classes.container}>

                        <Grid container spacing={3}>

                            { children }
                        
                        </Grid> 

                    </Container>

                </ContentSmart>  

            </WrapperSmart>

          


        </>
    )
}

export default SmartDataAppBar