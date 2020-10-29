import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: 9999999999999,
    top: 70,
    left: 30,
    right: 30,
    backgroundColor: '#4d383866',
  },
  tab: {
    color: '#ffffff',
  },

});

// type NavmenuMainPageTS = {fullpageApi: {}}
export default function NavmenuMainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue)
    setValue(newValue);
  };
  return (
    value === 0 ? <React.Fragment/> :
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="Початок" className={classes.tab}/> 
        <Tab label="Як працюе" className={classes.tab}/>
        <Tab label="Подробно" className={classes.tab}/>
      </Tabs>
    </Paper>
  )
}


