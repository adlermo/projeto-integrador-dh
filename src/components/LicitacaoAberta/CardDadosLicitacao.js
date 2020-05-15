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
    background: 'grey',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px grey',
    color: 'white',
    padding: '0 30px',
  },
    subtexto: {
      marginLeft: '15px',
      fontSize: 14,
    },
    img: {
      marginLeft: '-12px',
    },
    bodycard: {
      backgroundColor: '#E3E1E1',
      color: '#343434',
      borderRadius: 3,
      opacity: 1,
    },
    header:{
      color: '#343434',
    },
    textbody: {
      opacity: 80,
    }
});



const Licitacao = (props) => {
  const classes = useStyles();
  const { avatarSrc, title, subtitle, descriptionA, descriptionB, descriptionC } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardHeader className={classes.header}
        avatar={
            <img className={classes.img} style={{ height: "50px" }} src={require("../../assets/img/imgbox-dark.png")} />
        }
        title={title}
        subheader={subtitle}
      />
      <CardContent className={classes.bodycard}>
        <Typography className={classes.textbody}>
        <Typography variant="body1" component="p">
          {descriptionA}
        </Typography>
        <Typography variant="body1" component="p">
         {descriptionB}
        </Typography>
        <Typography variant="body1" component="p">
         {descriptionC}
        </Typography>
        </Typography>
        </CardContent>
      </CardContent>
      <Typography className={classes.subtexto}></Typography>
    </Card>
  );
}

export default Licitacao;