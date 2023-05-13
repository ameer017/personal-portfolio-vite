import React, {useState} from 'react'
import { Box, Card, CardActions, CardContent, Collapse, IconButton, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/styles'
import { ExpandMore } from '@mui/icons-material'
import {RxTriangleRight} from 'react-icons/rx'

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

const About = () => {
    const [expanded, setExpanded] = useState(false)
    const toExpand = () => {
        setExpanded(!expanded)
    }
    const image = 'https://abdullahameerportfolio.netlify.app/image/picture.jpg'
    const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div>
        <Card sx={{mt: 8, boxShadow: 'none'}}>
            <CardContent sx={{boxShadow: 'none', padding: '1rem 6rem'}}>
                <Typography variant='h4' gutterBottom textAlign='center' id='About'>About</Typography>
                {isMobile ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'column-reverse', textAlign: 'center'}}>
                    <div>

                    <Typography variant='paragraph' fontSize={20}>
                    Hello! My name is Raji Abdullahi Al Ameer and i enjoy creating things that lives on the web. My interest in software development started back in 2020 after watching a movie titled The Imitation Game (2014). It was produced to dwell on the story of the origins of modern day computing, set during the second world war era. This is a story of a British Mathematician who cracks the German 'Enigma' code.
                    </Typography>

                    <CardActions>
                        <ExpandMoreItem expand={expanded}
                            onClick ={toExpand} aria-label='show more'>
                            <ExpandMore />
                        </ExpandMoreItem>
                    </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <CardContent>

                            <Typography variant='paragraph' fontSize ={20} >
                            Fast forward to today, i've had the chance to study on many online platforms like <a href="https://www.aptlearn.io">Aptlearn,</a> <a href="https://https://www.progate.com">Progate,</a> <a href="https://www.freecodecamp.org">Freecodecamp</a>  respectively to broaden my knowledge on software engineering. Currently, i am a proud student of <a href="https://www.dltafrica.io">DLTAfrica.</a>
                            </Typography>
                        </CardContent>
                    </Collapse>
                    </div>
                    

                    <img src={image} width={200} />
                </Box>

                ) : (

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5rem', }}>
                    <Box>
                        <Typography variant='p' fontSize={20}>
                            Hello! My name is Raji Abdullahi Al Ameer and i enjoy creating things that lives on the web. My interest in software development started back in 2020 after watching a movie titled The Imitation Game (2014). It was produced to dwell on the story of the origins of modern day computing, set during the second world war era. This is a story of a British Mathematician who cracks the German 'Enigma' code.
                            Fast forward to today, i've had the chance to study on many online platforms like <a href="https://www.aptlearn.io">Aptlearn,</a> <a href="https://https://www.progate.com">Progate,</a> <a href="https://www.freecodecamp.org">Freecodecamp</a>  respectively to broaden my knowledge on software engineering. Currently, i am a proud student of <a href="https://www.dltafrica.io">DLTAfrica.</a>
                        </Typography>
                        <Box>
                            <Typography variant='span' sx={{display: 'flex', alignItems: 'center'}}>
                                <RxTriangleRight/> JavaScript
                                <RxTriangleRight/> React.js
                                <RxTriangleRight/> Node.js
                                <RxTriangleRight/> MongoDb
                            </Typography>
                        </Box>
                    </Box>

                    <img src={image} width={200} />
                </Box>
                )}
            </CardContent>
        </Card>
    </div>
  )
}

export default About