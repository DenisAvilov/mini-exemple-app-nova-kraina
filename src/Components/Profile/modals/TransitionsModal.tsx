import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Button, CardMedia} from '@material-ui/core'
import { ErrorMessage, FastField, Form, Formik } from 'formik'
import './inputFile.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      margin: theme.spacing(1),
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    cardFoto: {
      marginBottom: theme.spacing(1),
    },
  }),
)

export const TransitionsModal: React.FC<TSprops> = (props: TSprops) => {
  const {openProps, flagHandleOpen, avatarChangeSun, uid} = props
  const classes = useStyles()
  const [fileUse, fileUseFun] = useState<File>()
  const [disable, disableFun] = useState<boolean>(false)

  const initialValues: any = {
    avatarImg: '',
  }
  const validate = (value: any ) => {
    let error:any = {}
    if (value.file && value.file.size > 1052886) {
      console.log(value.file)
      error.avatarImg = 'Файл не повинин бути більше 1.5MB'
      disableFun(false)
    } if (value.file && value.file.size <= 1052886) {
      disableFun(true)
      fileUseFun(value.file)
    }
    return error
  }
  const onSubmit = () => {
    if (fileUse) {
      avatarChangeSun(fileUse, uid)
      flagHandleOpen()
    }
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openProps}
        onClose={flagHandleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProps}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Зминити фото профіля</h2>
            <hr/>
            <Formik
              initialValues = {initialValues}
              validate = {validate}
              onSubmit = {onSubmit}
            >
              {(formik) => {
                return (
                  <React.Fragment>
                    <Form>
                      <FastField name="avatarImg">
                        { (props: any) => {
                          return (
                            <div>
                              <label htmlFor="avatarImg" >
                                <Button
                                  variant="contained"
                                  color="default"
                                  startIcon={<CloudUploadIcon />}
                                  component="span"
                                >
                            Завантажити з комп'ютера
                                </Button>
                              </label>
                              <input
                                type="file"
                                id="avatarImg"
                                accept=".png, .jpg"
                                data-file="img"
                                {...props.field}
                                className={'inputFile'}
                                data-type="file"
                                onChange = {
                                  (elem: React.ChangeEvent<HTMLInputElement>)=>{
                                    if (elem.currentTarget.files) {
                                      formik.setFieldValue('file', elem.currentTarget.files[0])
                                    }
                                  }
                                }
                                // className={classes.input}
                              />
                              <ErrorMessage name="avatarImg">
                                {(error) =>
                                  <div className="error"> {error} </div>
                                }
                              </ErrorMessage>
                            </div>
                          )
                        }}
                      </FastField>
                      { disable ? <div>
                        <div className={classes.cardFoto}>
                          <p id="transition-modal-description">Ваше фото</p>
                          <CardMedia
                            className={classes.media}
                            image={fileUse ? URL.createObjectURL(fileUse) : '.jpg'}
                          />
                        </div>
                        <Button type="submit"
                          variant="contained"
                          color="default"
                          disabled = {formik.isSubmitting}
                        >Зберихти</Button>
                      </div> : ''}
                    </Form>
                  </React.Fragment>
                )
              }}
            </Formik>
            <div>
              <p id="transition-modal-description">Рекомендуемые фото</p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

type TSprops = {
  openProps: boolean
  flagHandleOpen: () => void
  avatarChangeSun: (fileUse: File, uid: string) => void
  uid: string
}


// https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
// https://stackoverflow.com/questions/66971129/typeerror-failed-to-execute-createobjecturl-on-url-overload-resolution-fai
// https://stackoverflow.com/questions/64488160/typescript-and-react-with-file-upload-typing
// https://habr.com/ru/post/321250/
