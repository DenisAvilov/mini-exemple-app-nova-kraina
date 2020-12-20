import React from 'react'
import {
  createStyles,
  Theme,
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { deepOrange } from '@material-ui/core/colors'
import './ProfileChangeStatus'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'display': 'flex',
      'flexWrap': 'wrap',
      '& .MuiInput-underline-34:before': {
        borderBottom: 'none',
      },
    },
    // margin: {
    //   margin: theme.spacing(1),
    // },
  }),
);

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
  },
});

export default function ProfileChangeStatus() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate >
      <ThemeProvider theme={theme}>
        <TextField
          label="зминити"
        //   id="mui-theme-provider-standard-input"
        />
        {/* <TextField
          className={classes.margin}
          label="ThemeProvider"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        /> */}
      </ThemeProvider>
    </form>
  );
}
