import React, { useState } from 'react'
import {
  createStyles,
  Theme,
  makeStyles,
} from '@material-ui/core/styles'
import './ProfileChangeStatus'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button } from '@material-ui/core'
import { range } from '../../fanction_helps/untils'
import firebase from 'firebase'

export const db = firebase.database()

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px',
      width: '300px',
      height: '70px',
    },
    poperedgenay: {
      fontSize: '12px',
      color: 'white',
      padding: '0',
      textAlign: 'right',
    },
    margin: {
      marginLeft: theme.spacing(1),
    },
  }),
);


export default function ProfileChangeStatus(props: mapStateToProps) {
  const classes = useStyles();
  const {realStatus, onBlur} = props
  let [writeStatus, fnRealStatus] = useState(realStatus)
  const MAX_LENGTH = 200
  const initialCountStatus = writeStatus.length
  let [count, fnCount] = useState(MAX_LENGTH - initialCountStatus)
  const initialValues: statusTS = { status: writeStatus}


  const validate = (value: statusTS) => {
    const te = value.status.split('').length
    const sum = range(te, MAX_LENGTH)
    fnCount(sum)
    fnRealStatus(writeStatus = value.status)
  }
  const onSubmit =(value: statusTS) => {
    if (realStatus !== value.status) {
      let userId = firebase.auth().currentUser?.uid
      let statusData = value.status
      writeNewPost(userId, statusData)
    } else {
      alert('Статус залишається без змін')
    }
    onBlur()
  }
  function writeNewPost(uid?: string, status?: string) {
    let updates:any = {}
    updates['/users/' + uid + '/status'] = status
    return firebase.database().ref().update(updates)
  }
  return (
    <React.Fragment>
      <Formik
        initialValues = { initialValues }
        validate = {validate}
        onSubmit = {onSubmit} >

        {(formik) => {
          return (
            <React.Fragment>
              <Form>
                <Field name="status">
                  { (props: any) => {
                    const {field, form, meta} = props
                    return (
                      <div>
                        <Field
                          as="textarea"
                          id="status"
                          {...field}
                          value= {writeStatus}
                          maxLength = {MAX_LENGTH}
                        />
                        { meta.touched && meta.error
                      ? <div>{meta.error}</div>
                      : null}
                        <div>{count}</div>
                      </div>
                    )
                  }
                  }
                </Field>

                <ErrorMessage name='status'>
                  {(erMes) => <div className="error">{erMes}</div> }
                </ErrorMessage>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
              Зберихти
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  color="primary"
                  onClick={() => onBlur()}
                  className={classes.margin}
                >
              Відміна
                </Button>
              </Form>
            </React.Fragment>
          )
        }}
      </Formik>
    </React.Fragment>
  );
}

type mapStateToProps = {
  realStatus: string
  onBlur: () => void
}
type statusTS = {
  status: string
}


