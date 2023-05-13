import { Avatar, Box, Card, CardContent, List, ListItem, ListItemAvatar, CardActions, Collapse, IconButton, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React, {useState} from 'react'
import { ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/styles'
import {TbBrandJavascript} from 'react-icons/tb'

const ExpandMoreItem = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg' : 'rotate(180deg',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const items = [
    
    {
        name: 'Currency converter app',
        link: 'https://currencyexchangeconverter.netlify.app/',
        build: 'HTML, CSS, Javascript'
    },

    {
        name: 'Snake game',
        link: 'https://snakegamexenzia.netlify.app/',
    },

    {
        name: 'Country info app',
        link: 'https://whole-country-info.netlify.app/',
    },

    {
        name: 'Weather forecast App',
        link: 'https://weathernewapp.netlify.app/',
    },

    {
        name: 'Rock paper and scissors', 
        link: 'https://symphonious-smakager-c6b71b.netlify.app/',
    },

    {
        name: 'Food Recipe', 
        link: 'https://foodrecipeee.netlify.app/',
    },

    {
        name: 'Form Validator app', 
        link: 'https://formappvalidator.netlify.app/',
    },

    {
        name: 'Random Joke App', 
        link: 'https://jokerandomapp.netlify.app/',
    },

    {
        name: 'Chat Dlt', 
        link: 'https://chatdlt.netlify.app/',
    }
]

const noteWorthy = [
    {
        name: 'Quran Recitation app',
        link: 'https://appquranaudio.netlify.app/',
        build: 'HTML, CSS, Javascript'
    },
    {
        name: 'Chat Bot',
        link: 'https://bot-chatapp.netlify.app/'
    }
]

const Project = () => {
    const [expanded, setExpanded] = useState(false)
    const toExpand = () => {
        setExpanded(!expanded)
    }
    const isMobile = useMediaQuery('(max-width: 700px)')
  return (
    <div>
        <Card sx={{mt: 8, boxShadow: 'none'}}>
            <CardContent sx={{boxShadow: 'none'}}>
                <Typography variant='h4' textAlign='center' id='Projects'>Projects.</Typography>
                <Typography variant='h5' textAlign='center'>Some projects i've worked on.</Typography>
                    <List>
                        <ListItem alignItems='center' sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                            {noteWorthy.map(({name, link}) => (
                                <>
                                <a href={link}>
                                    <ListItemText primary={<Avatar src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'/>} secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    // component="span"
                                    variant="h6"
                                    color="text.primary"
                                >
                                    {name}
                                </Typography>
                                {noteWorthy.map(({build, i}) => (
                                    <ListItemText primary={build} key={i}/>
                                ))}
                                </React.Fragment>
                            } sx={{margin: 4,  display: 'flex', gap: '1rem', flex: '1 0 140px', alignItems: 'center', justifyContent: 'center', width: 300,}}/>
                                </a>
                                </>
                            ))}
                        </ListItem>
                    </List>
                

                <Typography variant='h5' textAlign='center'>Other note worthy Projects.</Typography>

                <CardActions>
                    <ExpandMoreItem expand={expanded}
                        onClick ={toExpand} aria-label='show more'>
                        <ExpandMore />
                    </ExpandMoreItem>
                </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                        <List>
                        <ListItem alignItems='center' sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                            {items.map(({name, link}) => (
                                <>
                                <a href={link}>
                                    <ListItemText primary={<Avatar src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600' />} secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    // component="span"
                                    variant="h6"
                                    color="text.primary"
                                >
                                    {name}
                                </Typography>
                                {items.map(({build, i}) => (
                                    <ListItemText primary={build} key={i}/>
                                ))}
                                </React.Fragment>
                            } sx={{margin: 4, display: 'flex', gap: '1rem', flex: '1 0 140px', alignItems: 'center', justifyContent: 'center', width: 300,}}/>
                                </a>
                                </>
                            ))}
                        </ListItem>
                    </List>      
                        </CardContent>
                    </Collapse>
                    
            </CardContent>
        </Card>
    </div>
  )
}

export default Project