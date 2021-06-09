import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function a11yProps(index: any) {
  return {
    'id': `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ProfileScrablleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Публикациї" {...a11yProps(0)} />
          <Tab label="Інформація" {...a11yProps(1)} />
          <Tab label="Громадяни" {...a11yProps(2)} />
          <Tab label="Люди" {...a11yProps(3)} />
          <Tab label="Друзі" {...a11yProps(4)} />
          <Tab label="Громада" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
    </div>
  )
}
