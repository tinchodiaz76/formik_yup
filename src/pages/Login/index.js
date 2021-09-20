/**https://formik.org/docs/tutorial */
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import { useFormik } from "formik";
/**npm i yup --save */
//import * as Yup from "yup";
import {Box, Link} from '@material-ui/core';
import LoginForm from '../../components/LoginForm';
import {useStyles} from './styles';

export default function LoginView({setShowRegister}) {
  const classes = useStyles();
  
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      component="div"
    >
      <LoginForm />
      <div style={{marginTop: '1rem'}}>
        <Link className={classes.link} href="#" onClick={()=>setShowRegister(true)}>
          Sos nuevo? REGISTRATE!
        </Link>
      </div>
    </Box>
  );
}