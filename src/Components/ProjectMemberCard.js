import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.member.name}
            height="100"
            image={props.member.image}
            title={props.member.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.member.name}
              
              {props.member.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
  
          <Button href="#" size="small" color="primary">
             view project
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ImgMediaCard;
