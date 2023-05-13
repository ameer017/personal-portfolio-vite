import { makeStyles } from "@mui/styles";
const drawerWidth = 240

export default makeStyles((theme) => ({
    toolbar: {
        height: '70%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')] : {
            marginLeft: 0,
            flexWrap: 'wrap'
        },

    },
    navList :{
        display: 'flex',
        gap: '3em',
    },
    drawer: {
        [theme.breakpoints.up('sm')] : {
            width: drawerWidth,
        },
        paper: {
            width: drawerWidth
        }
    },
    linkBtn: {
        marginLeft: theme.spacing(2),
        textAlign: 'center',

        '&hover': {
            color: 'gray !important',
            textDecoration: 'none'
        }
    }
    
}))