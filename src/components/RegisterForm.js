import React from "react";
import useState from "react";
import { useFormik } from "formik";
/**npm i yup --save */
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {TextField,Select, MenuItem} from '@material-ui/core';

const RegisterForm = () => {
        
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
            nombre: "",
            apellido: "",
            nacionalidad:"",
            nacimiento:"",
            sexo:"",
            email: "",
        },
        validationSchema: Yup.object({
        nombre: Yup.string("Ingresa tu Nombre")
            .min(2, "EL Nombre debe tener como minimo 2 caracteres")
            .required("El Nombre es obligatorios"),
        apellido: Yup.string("Ingresa tu Apellido")
            .min(2, "EL Apellido debe tener como minimo 2 caracteres")
            .required("El Apellido es obligatorios"),            
        nacionalidad: Yup.string("Ingresa tu Nacionalidad")
            .required("La Nacionalidad es obligatoria"),            
        nacimiento: Yup.string("Ingresa tu Fecha de Nacimiento")
            .required("La Fecha de Nacimiento es obligatoria"),            
        sexo: Yup.string("Ingresa el sexo")
            .required("El sexo es requerido"),
        email: Yup.string("Ingresa tu email")
            .email("Ingresa un Email valido")
            .required("El Email es obligatorio"),            
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return ( 
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div>
          <TextField
            className={classes.input}
            id="nombre"
            label="Nombre"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
            variant="outlined"
            size="small"
          />

          <TextField
            className={classes.input}
            id="apellido"
            label="Apellido"
            name="apellido"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            error={formik.touched.apellido && Boolean(formik.errors.apellido)}
            helperText={formik.touched.apellido && formik.errors.apellido}
            variant="outlined"
            size="small"
          />

          <Select
            id="nacionalidad"
            label="Nacionalidad"
            name="nacionalidad"
            value={formik.values.nacionalidad}
            onChange={formik.handleChange}
            error={formik.touched.nacionalidad && Boolean(formik.errors.nacionalidad)}
            helperText={formik.touched.nacionalidad && formik.errors.nacionalidad}
          >
            <MenuItem value={10}>Argentina</MenuItem>
            <MenuItem value={20}>Brasil</MenuItem>
            <MenuItem value={30}>Paraguay</MenuItem>
          </Select>

          <TextField
            id="nacimiento"
            label="Fecha de Nacimiento"
            type="date"
            name="nacimiento"
            values= {formik.values.nacimiento}
            onChange={formik.handleChange}
            className={classes.input}

            error={formik.touched.nacimiento && Boolean(formik.errors.nacimiento)}
            helperText={formik.touched.nacimiento && formik.errors.nacimiento}

            InputLabelProps={{
              shrink: true,
            }}
          />

        <Select
            id="sexo"
            label="Sexo"
            name="sexo"
            value={formik.values.sexo}
            onChange={formik.handleChange}
            error={formik.touched.sexo && Boolean(formik.errors.sexo)}
            helperText={formik.touched.sexo && formik.errors.sexo}        
            // onChange={handleChange}
          >
            <MenuItem value={1}>Masculino</MenuItem>
            <MenuItem value={2}>Femenino</MenuItem>
          </Select>

          <TextField
            className={classes.input}
            id="email"
            label="Mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            size="small"
          />

          <button type="submit">Submit</button>
          

        </div>
      </form>
     );
}
 
export default RegisterForm;