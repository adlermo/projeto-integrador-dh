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
    background: '#07BEB8',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px grey',
    color: 'white',
    padding: '0 30px',
  },
    Subtexto: {
      marginLeft: '15px',
      fontSize: 14,
    },
    img: {
      backgroundColor: '#14D0C9',
      borderRadius: 3,
      marginLeft: '-12px',
    }
});



const Licitacao = (props) => {
  const classes = useStyles();
  const { avatarSrc, title, subtitle, descriptionA, descriptionB, descriptionC } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardHeader
        avatar={
            <img className={classes.img} style={{ height: "50px" }} src={require("../../assets/img/imgbox.png")} />
        }
        title={title}
        subheader={subtitle}
      />
        <Typography variant="body1" component="p">
          Preço R$ {descriptionA}
        </Typography>
        <Typography variant="body1" component="p">
         Preço R$ {descriptionB}
        </Typography>
        <Typography variant="body1" component="p">
         Preço R$ {descriptionC}
        </Typography>
      </CardContent>
      <Typography className={classes.Subtexto}></Typography>
    </Card>
  );
}

export default Licitacao;