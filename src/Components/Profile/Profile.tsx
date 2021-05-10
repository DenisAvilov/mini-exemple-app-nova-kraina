import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import './Profile.css'
import { Avatar, Fab, Grid } from '@material-ui/core'
import avatar from './../../img/avatar.png'
import avatarBackground from './../../img/learn_main_page.jpg'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import ProfileScrablleTabs from './ProfileScrablleTabs'
import ProfileChangeStatus from './ProfileChangeStatus'
import ResponsiveStatus from './ResponsiveStatus'


const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 10,
    },
    large: {
      width: theme.spacing(7) + 100,
      height: theme.spacing(7) + 100,
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(7) + 50,
        height: theme.spacing(7) + 50,
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    avatarBackgraund: {
      backgroundImage: `url(${avatarBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    profile: {
      'zIndex': 10,
      'backgroundColor': 'burlywood',
      'height': 'auto',
      'paddingTop': '348px',
      [theme.breakpoints.down('sm')]: {
        'paddingTop': '148px',
      },
      '& .wrap_avatar': {
        position: 'absolute',
        top: 0,
        height: '348px',
        maxWidth: '940px',
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
          height: '148px',
        },
      },
      '& .avatar': {
        position: 'relative',
        bottom: '-10px',
      },
      '& .change_avatar': {
        position: 'absolute',
        right: '-11px',
        bottom: '-10px',
        [theme.breakpoints.down('sm')]: {

        },
      },
      '& .full_name': {
        'height': '118.4px',
        'backgroundColor': 'hotpink',
        'boxSizing': 'border-box',
        '& article': {
          textAlign: 'center',
        },
      },
      '& .scrablle_tabs': {
        height: '60px',
        backgroundColor: 'maroon',
        maxWidth: '940px',
        [theme.breakpoints.down('sm')]: {
        },
      },
      '& .posts': {
        '& .posts_information_wrap_block': {
          [theme.breakpoints.down('sm')]: {
            backgroundColor: 'red',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
          },
          [theme.breakpoints.down('xs')]: {
            'backgroundColor': 'orange',
          },
          width: '100%',
          backgroundColor: 'gold',
          height: '250px',
          marginBottom: '10px',
        },
        'maxWidth': '940px',
        'backgroundColor': 'rad',
        'height': '770px',
        'overflow': 'hidden',
        [theme.breakpoints.down('sm')]: {
          height: '1000px',
          backgroundColor: 'black',
        },
        [theme.breakpoints.down('xs')]: {
          height: 'auto',
          backgroundColor: 'blue',
        },
        '& .profile_posts_your_wrap': {
          'overflowX': 'auto',
          'maxHeight': '770px',
          'backgroundColor': 'darkgreen',
          'boxSizing': 'border-box',
          '& .posts_your_wrap_block': {
            width: '100%',
            height: '300px',
            backgroundColor: 'brown',
            marginBottom: '10px',
            [theme.breakpoints.down('sm')]: {
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
            },
            [theme.breakpoints.down('xs')]: {
              'backgroundColor': 'orange',
            },
          },
        },
      },
    },
    profilePostsInformationWrap: {
      backgroundColor: 'blueviolet',
    },
    h1: {
      marginTop: '5px',
      marginBottom: '5px',
    }
  }),
);

export const Profile: React.FC< ProfileTs > = (props: ProfileTs) => {
  const classes = useStyles();
  let {fullName, status} = props

  let [realStatus, statusUseState] = useState(status)
  let [statusCount, statusUseCount] = useState(true)
  const onClickStatus = () =>{
    statusUseCount( !statusCount )
  }
  const onBlurStatus = () => {
    statusUseCount( !statusCount )
  }
 
  useEffect(() => {
    if (realStatus != status) {
      statusUseState(status)
    }
  }, [status])
  return (
    <React.Fragment>
      <Grid className={classes.profile} container
        direction="column"
        justify="center"
        alignItems="center" >
        <Grid className={ classes.avatarBackgraund + ' wrap_avatar'}
          container direction="column"
          justify="flex-end"
          alignItems="center" >
          <div className="avatar">
            <Avatar alt="Denis Avilov" src={avatar}
              className={classes.large}
            />
            <Fab size="small" color="inherit" className={classes.margin + ` change_avatar`}>
              <PhotoCameraIcon color="inherit"/>
            </Fab>

          </div>
        </Grid>
        <Grid className="full_name" container direction="column"
          justify="center"
          alignItems="center">
          <article>
            <h1 className={classes.h1}>{fullName}</h1>
          </article>
          {statusCount && <div onClick={onClickStatus}> {realStatus} </div>}
          {!statusCount && <ResponsiveStatus setOpens={!statusCount} onBlurStatus={onBlurStatus} realStatus={realStatus}/> }
          {/* <ProfileChangeStatus realStatus={realStatus} onBlurStatus={onBlurStatus} statusUseState={statusUseState}/> */}
        </Grid>
        <Grid className="scrablle_tabs" container>
          <ProfileScrablleTabs />
        </Grid>
        <Grid className="posts " container spacing={2}
          justify="space-between"
          alignItems="flex-start" >
          <Grid className={classes.profilePostsInformationWrap} item xs={12} sm={4} md={5} container alignItems="flex-start" >
            <div className="posts_information_wrap_block"></div>
            <div className="posts_information_wrap_block"></div>
            <div className="posts_information_wrap_block"></div>
          </Grid>
          <Grid className="profile_posts_your_wrap" item xs={12} sm={8} md={7} container
            justify="flex-start"
            alignItems="center">
            <div className="posts_your_wrap_block">a</div>
            <div className="posts_your_wrap_block">b</div>
            <div className="posts_your_wrap_block">c</div>
            <div className="posts_your_wrap_block">d</div>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
type MapStateToPropsTS = {fullName: string, status: string}
type DispatchPropsTS = {}
type OwnStateTS = {}
type ProfileTs = DispatchPropsTS & OwnStateTS & MapStateToPropsTS
