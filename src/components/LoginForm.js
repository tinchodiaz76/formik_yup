
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Box, TextField, Card, Button} from '@material-ui/core';
//import { useStyles } from "./styles";

const LoginForm = () => {
    
    const useStyles = makeStyles({
        root: {
          maxWidth: 275,
        },
        form: {
        },
        input: {
          margin: ".3rem 0 .3rem 0",
        },
      });

      const classes = useStyles();

      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string("Ingresa tu email")
            .email("Ingresa un Email valido")
            .required("El Email es obligatorio"),
          password: Yup.string("Ingresa tu password")
            .min(8, "La password debe tener como minimo 8 caracteres")
            .required("El Password es obligatorios"),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (  
    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} component='div'>
      <Card style={{background: '#AAA'}} className={classes.root}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.input}
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.input}
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            variant="outlined"
            size="small"
          />
          
          <Button
            style={{ margin: ".3rem 0 .3rem 0" }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Entrar
          </Button>

        </form>
      </Card>
    </Box>
    );
}
 
export default LoginForm;