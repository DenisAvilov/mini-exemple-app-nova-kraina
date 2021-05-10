import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ProfileChangeStatus from './ProfileChangeStatus';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: '12px',
      color: 'red',
    },
  }),
);

export default function ResponsiveStatus( props: any) {
  let {setOpens, onBlurStatus, realStatus} = props
  const [open, setOpen] = React.useState(setOpens);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onBlurStatus()
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{'Змінити свій статус'}</DialogTitle>
        <DialogContent>
          <ProfileChangeStatus realStatus={realStatus}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Скасувати
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Змінити
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

type mapStateToProps = {
    realStatus: string
    setOpens: boolean
    onBlurStatus: () => void
    // statusUseState: React.Dispatch<React.SetStateAction<string>>
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
