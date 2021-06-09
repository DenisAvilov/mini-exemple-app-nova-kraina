import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Avatar, Fab, Grid } from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import ProfileScrablleTabs from './ProfileScrablleTabs'
import ProfileChangeStatus from './ProfileChangeStatus'
import { useEffect } from 'react'
import { TransitionsModal } from './modals/TransitionsModal'
import RecipeReviewCard from './Posts/Post'
import { TSdefaultProfile } from '../../redux/typesTs'
import { Link, useRouteMatch } from 'react-router-dom'
import { red } from '@material-ui/core/colors';
import { databaseApi } from '../../API/DatabaseApi/Status.Api'
import './Profile.css'

export const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const {profile, avatarChangeSun, avatar, uid} = props
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
        'backgroundImage': `url(${avatar})`,
        'backgroundPosition': 'center',
        'backgroundSize': 'cover',

      },
      profile: {
        'zIndex': 10,
        'backgroundColor': '#e7e7e7',
        'paddingTop': '65px',
        [theme.breakpoints.down('sm')]: {
          'paddingTop': '65px',
        },
        '& .wrap_avatar': {
          'position': 'relative',
          'zIndex': 200,
          'top': 0,
          'maxWidth': '940px',
          'height': 400,
          'borderRadius': '8px',
          [theme.breakpoints.down('sm')]: {

          },
        },
        '& .wrap_avatar::after': {
          position: 'absolute',
          content: '""',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#000000',
          zIndex: 10,
          opacity: '0.5',
          borderRadius: '8px',
        },
        '& .avatar': {
          position: 'relative',
          zIndex: '4000',
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
          'backgroundColor': '#cecece',
          'border': '1px solid #9b9b9b',
          'maxWidth': '940px',
          'boxSizing': 'border-box',
          'position': 'relative',
          'borderRadius': 8,
          'padding': '15px 20px',
          'zIndex': 2,
          'marginBottom': 15,
          '& article': {
            textAlign: 'center',
          },
        },
        '& .scrablle_tabs': {
          maxWidth: '940px',
          marginBottom: 15,
          [theme.breakpoints.down('sm')]: {
          },
        },
        '& .posts': {
          '& .posts_information_wrap_block': {
            [theme.breakpoints.down('sm')]: {
              // backgroundColor: 'red',
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
            },
            [theme.breakpoints.down('xs')]: {
              // 'backgroundColor': 'orange',
            },
            width: '100%',
            backgroundColor: '#cecece',
            minHeight: '250px',
            marginBottom: '10px',
          },
          'maxWidth': '940px',
          'minHeight': '770px',
          'overflow': 'hidden',
          [theme.breakpoints.down('sm')]: {
            // backgroundColor: 'black',
          },
          [theme.breakpoints.down('xs')]: {
            // backgroundColor: 'blue',
          },
          '& .profile_posts_your_wrap': {
            'overflowX': 'auto',
            'maxHeight': '770px',
            // 'backgroundColor': 'darkgreen',
            'boxSizing': 'border-box',
            '& .posts_your_wrap_block': {
              minHeight: '300px',
              marginBottom: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              [theme.breakpoints.down('sm')]: {
                marginLeft: 'auto',
                marginRight: 'auto',
              },
              [theme.breakpoints.down('xs')]: {
                // 'backgroundColor': 'orange',
              },
            },
          },
        },
      },
      profilePostsInformationWrap: {
        // backgroundColor: 'blueviolet',
      },
      h1: {
        marginTop: '5px',
        marginBottom: '5px',
      },
      titleColor: {
        color: red[500],
      },
    }),
  );
  const classes = useStyles();
  // Count max lens status
  let [statusCount, statusUseCount] = useState(true)
  const onClickStatus = () =>{
    statusUseCount( !statusCount )
  }
  // Status data from the server
  let [status, statusFn] = useState(profile.status)
  useEffect(() => {
    databaseApi()
        .status()
        .then((snapshot) => {
          statusFn(snapshot.status)
        })
  }, [statusCount])
  let [open, setOpen] = useState(false);
  let match = useRouteMatch();
  const flagHandleOpen = () => {
    setOpen(!open);
  };

  const post = new Array(1)
      .fill('')
      .map( (_, index) => <div key={index} className="posts_your_wrap_block"><RecipeReviewCard/></div>)


  return (
    <React.Fragment>
      <Grid className={classes.profile} container
        direction="column"
        justify="center"
        alignItems="center" >
        <Grid className={ classes.avatarBackgraund + ' wrap_avatar' }
          container direction="column"
          justify="flex-end"
          alignItems="center" >
          <div className="avatar">
            <Avatar alt="A" src={`${avatar}`}
              className={classes.large}
            />
            <Fab size="small" color="inherit"
              className={classes.margin + ` change_avatar`}
              onClick={flagHandleOpen}>
              <PhotoCameraIcon color="inherit"/>
            </Fab>
          </div>
          { open &&
           <TransitionsModal
             openProps={open}
             flagHandleOpen={flagHandleOpen}
             avatarChangeSun={avatarChangeSun}
             uid={uid}/>}
        </Grid>
        {/* begin Status UI */}
        <Grid className="full_name" container direction="column"
          justify="center"
          alignItems="center">
          <article>
            <h1 className={classes.h1}>{profile.firstName + ' ' + profile.lastName}</h1>
          </article>
          {statusCount && <div onClick={onClickStatus}> {status} </div>}
          {!statusCount && <ProfileChangeStatus
            realStatus={status} onBlur={onClickStatus}/> }
        </Grid>
        {/* The End Status UI */}
        <Grid className="scrablle_tabs" container>
          <ProfileScrablleTabs />
        </Grid>
        <Grid className="posts " container spacing={2}
          justify="space-between"
          alignItems="flex-start" >
          <Grid className={classes.profilePostsInformationWrap}
            item xs={12} sm={4} md={5} container alignItems="flex-start" >

            {/* <Link to={`${match.url}infocards`}>InfoCards</Link> */}
            <div className="posts_information_wrap_block">
              <h2 className={classes.titleColor}>На якій стадії проект</h2>
              <hr/>
              Зараз в прототипі социальній мережі можливе зробити наступне:
              <ul>
                <li>Зарееструватсь</li>
                <li>Оновивити фото профіля</li>
                <li>Зминити статус</li>
              </ul>
            </div>
          </Grid>
          <Grid className="profile_posts_your_wrap"
            item xs={12} sm={8} md={7} container
            justify="flex-start"
            alignItems="center">

            {post}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
type MapStateToPropsTS = {
  profile: TSdefaultProfile
  avatar?: null | string | File | undefined
  uid: string
}
type DispatchPropsTS = {
  avatarChangeSun: (fileUse: File, uid: string) => void
}
type OwnStateTS = {
  flagHandleOpen?: () => void
}
type ProfileProps = DispatchPropsTS & OwnStateTS & MapStateToPropsTS
