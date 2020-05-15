import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
    root: {
    background: '#DEE7E7',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px grey',
    color: '#40476D',
    padding: '0 30px',
    '&:hover': {
      background: 'white',
      boxShadow: '0 3px 5px 2px grey',
    }
  },
});



const CardNovaLicitacao = (props) => {
  const classes = useStyles();
  const { avatarSrc, title, subtitle, descriptionA, descriptionB, descriptionC } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardHeader
        avatar={
            <img style={{ height: "50px" }} src={require("../../assets/img/imgbox.png")} />
        }
        title={
          <Typography variant="h6">Abrir Solicitação
            </Typography>
        }
      />
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

export default CardNovaLicitacao;