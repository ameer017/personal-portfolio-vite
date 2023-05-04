import React from 'react'
import { Box, CircularProgress } from '@mui/material'


const Empty = () => {
  return (
    <div>
        <Box display="flex" justifyContent="center" 
      alignItems='center' position='absolute' 
      top='100%' left='50%'
      >
          <CircularProgress size='1rem'/>
          <CircularProgress size='1rem'/>
          <CircularProgress size='1rem'/>
          <CircularProgress size='1rem'/>
      </Box>
    </div>
  )
}

export default Empty