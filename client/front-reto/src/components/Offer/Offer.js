
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { valuesContext } from '../../contexts/contextValue'

const useStyles = makeStyles({
    root: {
        maxWidth: 327,
        height: '400px',
        boxShadow: '2px 2px 5px grey',
        background: '#1F3A93',
        fontSize: '16px',
        borderRadius: '8px',
        color: '#f8f8f8',
        marginBottom: '16px',
    },
    media: {
        height: '220px',
    },
    des: {
        color: '#f8f8f8',
        padding: '16px',
        fontSize: '18px',

    },
    des2: {
        fontSize: '14px',
    },
});


const MediaCard = (props) => {

    const { setDetailE } = useContext(valuesContext);

    const classes = useStyles();
    let { imagen_url, nombre_evento, descripcion, precio } = props.data;
    let strBox='';
    let history = useHistory()
    if(descripcion){
        let str = descripcion
        strBox = str.substring(0, 50);
    }

    const openDetailEvent = () =>{
        setDetailE(props.cardId)
        history.push("/detailE");
    }


    return (
        <Card className={classes.root} id={props.cardId} onClick={openDetailEvent}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imagen_url}
                    title="Contemplative Reptile"
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