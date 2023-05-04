import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Typography , List, ListItem, ListItemText, ListSubheader, Icon} from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import useStyles from './styleNav'
import { useTheme } from '@mui/material/styles';
import {DiCoda} from 'react-icons/di'

const lists = [ 'About', 'Services', 'Projects', 'Stacks', 'Contact']
const drawerWidth = 150
const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')

    const [mobileOpen, setMobileOpen] = useState(false)

    const classes = useStyles()
    const theme = useTheme()
    const isAuthenticated = 'true';

  return (
    <>
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography >
                    <DiCoda fontSize={40}/>
                </Typography>

                
                {isMobile ? (
                    <IconButton
                        color='inherit'
                        edge='end'
                        styles={{outline: 'none'}}
                        onClick={() => {setMobileOpen((prevMobileOpen) => !prevMobileOpen)}}
                        className={classes.menuBtn}
                    >
                        {/* menu icon for mobile screen usage */}
                    <Menu />
                    </IconButton>
                    
                ) :
                    <List className={classes.navList}>
                        {lists.map((list , i) => (
                            <ListItemText primary={list} key={i}/>
                        ))}
                        <Button variant='outlined' 
                        color="success"
                        href='https://drive.google.com/file/d/1uwJQbzOR9ynomv7nvN4f-xkTzqN372Y5/view?usp=share_link'    
                    >Resumé</Button>
                    </List>   
                }

            </Toolbar>
        </AppBar>

        <div>
            <nav className={classes.drawer}>
                {isMobile ? (
                    <Drawer
                    variant='temporary'
                    anchor='right'
                    open= {mobileOpen}
                    onClose={() => {setMobileOpen((prevMobileOpen) => !prevMobileOpen)}}
                    classes={{paper: classes.drawerPaper}}
                    ModalProps={{keepMounted: true}}
                    sx={{display: { xs: 'flex', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                        <List className={classes.linkBtn}>
                        {lists.map((list , i) => (
                            <ListItemText primary={list} key={i}/>
                        ))}
                        <Button variant='outlined'
                        color="success" 
                            href='https://drive.google.com/file/d/1uwJQbzOR9ynomv7nvN4f-xkTzqN372Y5/view?usp=share_link'    
                            >Resumé</Button>
                        </List>
                    </Drawer>
                ) : (
                    <Drawer></Drawer>
                )}
            </nav>
        </div>
    </>
  )
}

export default Navbar