import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import testImg from './../../../img/field.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 587,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="novakraiana" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Це перший пост в цій мережі"
        subheader="Червень 8, 2020"
      />
      <CardMedia
        className={classes.media}
        image={testImg}
        title="Nova Kraїna"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Це перший пост, пост "риба",
        але в цьому пості я б хотів поділитись з вами
        інструментами, які використовуються при
        створенні цього прототипу Української соціальної мережі.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Інструменти:</Typography>
          <Typography paragraph>
          Мережа пишеться власноруч з чистого аркушу.
          </Typography>
          <Typography paragraph>
          Для збереження даних використовується <strong> Firebase </strong>
          який надає безкоштовно місце на своїх серверах
          та надає можливість змінювати ці данні в реальному часі.
          Місце буде надаватись безкоштовно до певного часу, за використані МБ.
          Цього місця повинно вистачити, щоб зробити прототип робочим.
          </Typography>
          <Typography paragraph>
          Для відображення соціальної мережі використовується
          бібліотека <strong> React JS </strong>від компанії Facebook.
          React відображує окремі елементи зовнішнього вигляду,
          які надає фреймворк<strong> Material-ui.</strong>
          </Typography>
          <Typography>
          Для того, щоб код JavaScript був
          передбачуваний використовується <strong>TypeScript.</strong>
          </Typography>
          <Typography>
          Для того, щоб мати змогу долучатись до розбудови
          проекту різноманітним розробникам,
          та спільно працювати - код був викладено до самої
          великої платформи для розробки у світі <strong>GitHub</strong>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
