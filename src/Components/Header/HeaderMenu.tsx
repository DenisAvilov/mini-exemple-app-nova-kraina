import React from 'react'
import clsx from 'clsx'
import lidMagnit from './../../img/tezis1.jpg'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'
import { CardMedia } from '@material-ui/core'

import { ListItemAvatar } from '@material-ui/core'
import { TSdefaultProfile } from '../../redux/typesTs'

export const HeaderMenu: React.FC<propsType> = (props: propsType) => {
  const {profile} = props
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

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
        alt="Листівка"
        height="auto"
        image={`${lidMagnit}`}
        title="Листівка"
      />
    </div>
  )
  return (
    <Grid container alignItems={'center'} className={classes.root}>
      <Grid item sm xs container alignItems="center" className={classes.wrapLogo}>
        <Grid item >
          <Logo />
        </Grid>
      </Grid>
      <Grid item sm xs container justify="flex-end"
        className={classes.burgerElement}>
        { props.isOpen
        ? <React.Fragment >
          <List className={classes.ulMenu}>
            <ListItem>
              <ListItemText secondary={`${profile.firstName + ' ' + profile.lastName}` } />
            </ListItem>
            <ListItem className="avatar">
              <ListItemAvatar>
                <Avatar alt={profile.firstName} src={profile.photo.avatar ? profile.photo.avatar : ''}/>
              </ListItemAvatar>
            </ListItem>
          </List>
        </React.Fragment>
        : '' }
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon className={classes.colorThem}/></Button>
        <Drawer anchor={'right'} open={state['right']}
          onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </Grid>
    </Grid>
  )
}
const useStyles = makeStyles( (theme: Theme) => createStyles( {
  root: {
    height: 60,
    padding: '10px 0',
    backgroundColor: theme.palette.background.default,
    left: 0,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    flexWrap: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: '0 10px',
    },
  },
  ulMenu: {
    'flexWrap': 'nowrap',
    'display': 'flex',
    'justifyContent': 'flex-end',
    'paddingTop': 0,
    'paddingBottom': 0,
    '& li': {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      justifyContent: 'flex-start',
      textAlign: 'right',
    },
    '& .avatar': {
      maxWidth: 56,
    },
  },
  burgerElement: {
    'flexWrap': 'nowrap',
    '& > *': {
      marginLeft: theme.spacing(1),
    },
  },
  wrapLogo: {
    flexGrow: 2,
  },
  logo: { ...theme.typography.button,
    'font-weight': 'bold',
    'color': 'rgb(68 7 7)',
    'border-radius': '2px',
    'flex-wrap': 'nowrap',
    'display': 'flex',
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
    color: theme.palette.primary.main,
  },
  marginLeft: {
    marginLeft: 'auto',
  },
}))
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

type Anchor = 'right'
type propsType = {
  isOpen?: boolean
  sanLogout: () => void
  profile: TSdefaultProfile
}
