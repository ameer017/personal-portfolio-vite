import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <>
        <Card sx={{mt: 2, boxShadow: 'none'}}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                <Typography variant='h4' id='Contact'>Contact</Typography>
                
                <TextField variant='outlined' placeholder='Fullname here' required/> 
                <TextField variant='outlined' placeholder='email here' required/>
                <TextField
                  id="outlined-multiline-static" label="input yout message here" multiline rows={4} required/>
                  <Button variant='contained' required>Send</Button>
            </CardContent>
        </Card>
    </>
  )
}

export default Contact