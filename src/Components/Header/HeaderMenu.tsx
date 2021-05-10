import React from 'react';
import clsx from 'clsx';
import lidMagnit from './../../img/tezis1.jpg'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
// import theme from '../../themeStyles';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles( (theme: Theme) => createStyles( {
  root: {
    height: 60,
    padding: '10px 0',
    backgroundColor: theme.palette.background.default,
    left: 0,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    [theme.breakpoints.down('lg')]: {
      padding: '0 10px',
    },
  },
  burgerElement: {
    '& > *': {
      marginLeft: theme.spacing(1),
    },
  },
  logo: { ...theme.typography.button,
    'fontWeight': 'bold',
    'color': 'rgb(68 7 7)',
    'borderRadius': '2px',
    '&:hover': {
      transition: 'all 0.4s ease',
      color: 'rgb(247 244 244)',
      background: 'linear-gradient(45deg, #000000 50%, red 50%)' },
    'background': 'linear-gradient(45deg, #ffc61878 50%, #1878ff7a 50%)',
    'padding': '10px 15px',

  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  colorThem: {
    color: theme.palette.primary.main,
  },
  listLink: {
    // color: 'green',
    color: theme.palette.primary.main,


  },
  // colorButtom: {}
}));

type Anchor = 'right';

export default function HeaderMenu(
    props: {isOpen: boolean, sanLogout: () => void, fullName: string}) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.isOpen
        ? <NavLink to="/"
          style={{
            textDecoration: 'none',
          }}>
          <ListItem button>
            <ListItemIcon> <InboxIcon />  </ListItemIcon>
            <ListItemText secondary="Вихід" onClick={ () => props.sanLogout()}/>
          </ListItem>
        </NavLink>
        : <React.Fragment> <NavLink to="/signin"
          style={{
            textDecoration: 'none',
          }}>
          <ListItem button>
            <ListItemIcon> <InboxIcon />  </ListItemIcon>
            <ListItemText secondary="Вхід"/>
          </ListItem>
        </NavLink>
        <NavLink to="/signup"
          style={{
            textDecoration: 'none',
          }}>
          <ListItem button>
            <ListItemIcon> <InboxIcon />  </ListItemIcon>
            <ListItemText secondary="Реєстрація"/>
          </ListItem>
        </NavLink>
        </React.Fragment> }
        { props.isOpen ?
        <NavLink to="/about"
          style={{
            textDecoration: 'none',
          }}>
          <ListItem button>
            <ListItemIcon> <MailIcon /> </ListItemIcon>
            <ListItemText secondary={'Про мене'} />
          </ListItem>
        </NavLink>
        : '' }
      </List>

      <Divider />
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="auto"
        image={`${lidMagnit}`}
        title="Contemplative Reptile"
      />
    </div>
  );
  // console.log('hesder ', props.isOpen)
  return (
    <Grid container alignItems={'center'} className={classes.root}>
      <Grid item sm xs container alignItems="center" >
        <Grid item >
          <Logo />
        </Grid>
      </Grid>
      <Grid item sm xs container justify="flex-end" className={classes.burgerElement}>
        {props.isOpen ? <React.Fragment > {props.fullName} <Avatar src="/broken-image.jpg" /> </React.Fragment>: '' }
        <Button onClick={toggleDrawer('right', true)}><MenuIcon className={classes.colorThem}/></Button>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </Grid>
    </Grid>
  );
}

export const Logo: React.FC<any> = (props: any) => {
  const classes = useStyles()
  return (
    <NavLink className={classes.logo} to="/" title={'На головну'} activeStyle={{
      textDecoration: 'none',
    }}>
      {'Nova Kraїna'}
    </NavLink>
  )
}
