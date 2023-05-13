import { Card, CardContent, Typography,} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Card sx={{textAlign: 'center', mt: 4, mb: 5, boxShadow: 'none'}}>
            <CardContent sx={{boxShadow: 'none', borderTop: '1px solid grey'}}>
                  <Typography component='span' align='center'>
                      Designed and built by <a href='mailto:rajiabdullahi907@gmail.com'>Al Ameer</a>
                  </Typography>
            </CardContent>
        </Card>
    </>
  )
}

export default Footer