import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import ImagemPerfil from "../../assets/img/perfil.jpg"

const useStyles = makeStyles({
    root: {
    maxWidth: 345,
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px grey',
    color: 'grey',
    padding: '0 30px',
    '&:hover': {
      background: 'yellow',
      boxShadow: '0 3px 5px 2px #grey',
    }
  },
    Subtexto: {
      marginLeft: '15px',
    },
    media: {
      paddingTop: '56.25%'
    }
});



const Licitacao = (props) => {
  const classes = useStyles();
  const { avatarSrc, title, subtitle, descriptionA, descriptionB, descriptionC } = props;

  return (
   <Card className={classes.root} variant="outlined">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia className={classes.media} img src={ImagemPerfil} title="Perfil" /> 
      <CardContent>
        <Typography variant="body1" component="p">
          {descriptionA}
        </Typography>
        <Typography variant="body1" component="p">
          {descriptionB}
        </Typography>
        <Typography variant="body1" component="p">
          {descriptionC}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Licitacao;