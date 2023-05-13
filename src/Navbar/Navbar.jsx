import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer,  Button, useMediaQuery, Typography , List, ListItemText} from '@mui/material'
import { Menu} from '@mui/icons-material'
import useStyles from './styleNav'
import {DiCoda} from 'react-icons/di'
import { Socials } from '..'

const lists = [ 
    {tag: 'About', id: '#About'}, 
    {tag: 'Services', id: '#Services'}, 
    {tag: 'Projects', id: '#Projects'}, 
    // {tag: 'Stacks', id: '#Stacks'}, 
    {tag: 'Contact', id: '#Contact'}]
const drawerWidth = 150
const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')

    const [mobileOpen, setMobileOpen] = useState(false)

    const classes = useStyles()

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
                        {lists.map(({tag, id}) => (
                        <a href={id}>

                            <ListItemText primary={tag}/>   
                        </a>
                        ))}

                        <Button variant='outlined' 
                        color="primary"
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
                        <Button variant='outlined'
                            color="success" 
                            href='https://drive.google.com/file/d/1uwJQbzOR9ynomv7nvN4f-xkTzqN372Y5/view?usp=share_link'   >
                            Resumé
                        </Button>
                            

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