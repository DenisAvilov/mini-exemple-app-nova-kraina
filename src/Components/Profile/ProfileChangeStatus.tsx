import React, { useEffect, useState } from 'react'
import {
  createStyles,
  Theme,
  makeStyles,
} from '@material-ui/core/styles'

import './ProfileChangeStatus'
import { Field } from 'formik'
import { DialogContent } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px',
      width: '300px',
      height: '70px',
    },
    poperedgenay: {
      fontSize: '12px',
      color: 'red',
      padding: '0',
      textAlign: 'right',
    },
  }),
);


export default function ProfileChangeStatus(props: mapStateToProps) {
  const classes = useStyles();
  const {realStatus} = props
  const CustomInputComponent = (props: any) => (
    <textarea {...props}/>
  );


  let [countCimbol, setCountCimbol] = useState(250)
  useEffect(()=>{
    if ( realStatus.length != 250) {
      setCountCimbol(countCimbol = 250 - realStatus.length)
    }
  }, [realStatus])

  return (
    <React.Fragment>
      <Field name='status' as={CustomInputComponent}> </Field>
      <DialogContent className={classes.poperedgenay}>
        {`Осталось ввєсти ${countCimbol} символів`}
      </DialogContent>
    </React.Fragment>
  );
}

type mapStateToProps = {
  realStatus: string
}

