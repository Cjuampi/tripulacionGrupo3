import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MapOffer from '../MapOffer/MapOffer.css';

const useStyles = makeStyles({
    root: {
        display:'flex',
        alignContent:'baseline',
        width: '375px',
        height: '180px',
        boxShadow: '2px 2px 5px grey',
        background: '#1F3A93',
        fontSize: '16px',
        borderRadius: '8px',
        color: 'black',
        marginBottom: '16px',
        marginTop:'10px'
    },
    media: {
        height: '125px',
        width: '110px'
    },
    des: {
        display:'flex',
        flexDirection:'column',
        width:'250px',
        color: '#f8f8f8',
        padding: '16px',
        fontSize: '16px',

    },
    des2: {
        fontSize: '16px',
    },
});

const MediaCard = (props) => {
    const classes = useStyles();
    let { imagen_url, nombre_evento, descripcion, precio } = props.data;
    let strBox='';
    if(descripcion){
        let str = descripcion
        strBox = str.substring(0, 50);
    }
    return (
        <Card className={classes.root} id={props.cardId}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imagen_url}
                    title="Imagen evento"
                />
                <CardContent className={classes.des}>
                    <Typography variant="h6" >
                        {nombre_evento}
                    </Typography>
                    <Typography className={classes.des2} >
                        {strBox} (leer más)
                    </Typography>
                    <Typography >
                        {precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default MediaCard;