import React from 'react'
import { Button, TextField, FormControl, Input, InputLabel, IconButton, InputAdornment} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default function FormLogin() {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="formLogin">
      <div className="titleForm">
        <h1>
          Utilize o painel agora mesmo
        </h1>
      </div>
      <div>
        <TextField className="inputForm" type="email" placeholder="Digite o seu e-mail" />
        <FormControl className="inputForm" >
          <InputLabel htmlFor="standard-adornment-password">Digite a sua senha</InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder="Digite a sua senha"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
      </div>
      <Button href="#" color="primary" className="forgotPassword"> Esqueci minha senha </Button>
      
        <Link to="/home">
          <Button className="btnEntar" variant="contained" color="primary">
            Entrar
          </Button>
        </Link> 
      
    </div>
  )
}
