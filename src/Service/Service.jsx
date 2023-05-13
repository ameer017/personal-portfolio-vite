import { Avatar, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
// import ClassIcon from '@mui/icons-material/Class';

const items = [
    {
        name: 'Web Development',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cum ipsa exercitationem esse aut voluptatibus possimus magni repudiandae expedita commodi architecto perferendis. Ducimus enim ea atque modi mollitia. Porro, tenetur.'
    },
    {
        name: 'UI/UX  Design',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cum ipsa exercitationem esse aut voluptatibus possimus magni repudiandae expedita commodi architecto perferendis. Ducimus enim ea atque modi mollitia. Porro, tenetur.'
    },
    {
        name: 'Web Animation',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cum ipsa exercitationem esse aut voluptatibus possimus magni repudiandae expedita commodi architecto perferendis. Ducimus enim ea atque modi mollitia. Porro, tenetur.'
    },
]
const Service = () => {
  return (
    <>
        <Card sx={{mt: 8, boxShadow: 'none'}}>
            <CardContent sx={{boxShadow: 'none'}}>
                <Typography variant='h4' align='center' id='Services'>Services.</Typography>
                <List>
                    <ListItem 
                        alignItems='center' sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',}}
                    >
                        {items.map(({name, details}) => (
                            <ListItemText primary={name} secondary={details}
                            sx={{margin: 4,  display: 'flex', gap: '1rem', flex: '1 0 140px', alignItems: 'center', justifyContent: 'center',  flexDirection: 'column', textAlign: 'center'}}
                            />
                        ))}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    </>
  )
}

export default Service