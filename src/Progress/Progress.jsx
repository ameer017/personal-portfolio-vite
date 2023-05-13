import React, {useState, useEffect} from 'react'
import { Box, Card, CardContent, LinearProgress, Typography, Grid, CircularProgress } from '@mui/material'


const Progress = () => {
    const [progress, setProgress] = useState(0)
    const [buffer, setBuffer] = useState(10)

    const progressRef = React.useRef(() => {});
    useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
    <div>
        <Card sx={{mt: 10, boxShadow: 'none'}}>
            <Typography variant='h4' gutterBottom textAlign='center'>My learning Roadmap.</Typography>
                <Typography variant='h5' gutterBottom textAlign='center'>Web App. Development Course</Typography>
            <CardContent sx={{boxShadow: 'none', display: 'flex',flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2.5rem'}}>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>HTML:</Typography>
                    <CircularProgress variant='determinate' value={90} color='secondary' />
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>CSS:</Typography>
                    <CircularProgress variant='determinate' value={80}  color='success' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>Javascript:</Typography>
                    <CircularProgress variant='determinate' value={50}  color='inherit' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>React.js:</Typography>
                    <CircularProgress variant='determinate' value={30}  color='secondary' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>Node.js:</Typography>
                    <CircularProgress variant='determinate' value={10}  color='success' />
                </Grid>
            </CardContent>
                <Typography variant='h5' gutterBottom textAlign='center' mt='2rem'>Mobile App. Development Course</Typography>
            <CardContent sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                <Grid sx={{gap: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant='h5' gutterBottom>HTML</Typography>
                    <CircularProgress variant='determinate' value={90}  color='secondary' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>CSS:</Typography>
                    <CircularProgress variant='determinate' value={80}  color='success' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>Javascript:</Typography>
                    <CircularProgress variant='determinate' value={50}  color='inherit' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>Node.js:</Typography>
                    <CircularProgress variant='determinate' value={2}  color='secondary' />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
                    <Typography variant='h5' gutterBottom>Flutter:</Typography>
                    <CircularProgress variant='determinate' value={2}  color='success' />
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default Progress