import React from 'react'
import './HeroSection.scss'
import { Button, Card, CardContent, Typography } from '@mui/material'
import {TypeWriter} from 'react-typewritter'
const HeroSection = () => {
  return (
    <div>
        <Card sx={{mt: 20, mb: 15, boxShadow: 'none',}}>
            <CardContent sx={{boxShadow: 'none', padding: '1rem 6rem'}}>
                <Typography variant='h6'>Hi, my name is ...</Typography>
                <Typography variant='h1' fontSize={50}>Raji Abdullah Al Ameer.</Typography>
                <TypeWriter elementType='h2' text='I build things for the web..' />
                <Typography variant='p' fontSize={15}>I'm a web developer, specializing in building (and occasionally designing) exceptional digital experiences. Currently, i'm focused on becoming a certified software engineer at <a href="https://www.dltafrica.io">DLTAfrica.</a></Typography>
                <br />

                <Button variant='outlined' sx={{mt: 2}} href='https://drive.google.com/file/d/1uwJQbzOR9ynomv7nvN4f-xkTzqN372Y5/view?usp=share_link'>Get Started</Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default HeroSection