import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { valuesContext } from '../../contexts/contextValue'

const useStyles = makeStyles({
    root: {
        width: '100vw',
        boxShadow: '2px 2px 5px grey',
        background: '#F8F8F8',
        fontSize: '16px',
        borderRadius: '8px',
        color: 'black',
        marginBottom: '16px',
        textAlign:'left',
        marginTop:'20px'
    },
    name: {
        color: 'black',
        padding: '16px',
        fontSize: '18px',
        fontWeight:"fontWeightBold"

    },
    comment: {
        fontSize: '14px',
        fontStyle:"oblique",
    },
});


const MediaCard2 = (props) => {
    const classes = useStyles();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

  



    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.name}>
                    <Typography variant="h6" >
                        <span className='bold'>{props.nombre}</span>
                    </Typography>
                    <Typography className={classes.date} >
                        {new Date(props.fecha).toLocaleDateString("es-ES", options)} 
                    </Typography>
                    <Typography className={classes.comment} >
                        {props.comentario} 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default MediaCard2;