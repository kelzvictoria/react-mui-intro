import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import SaveIcon from "@material-ui/icons/Save"
import CancelIcon from "@material-ui/icons/Cancel"
import { Button } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "0 30px"
  }
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 5
    }
  },
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: green[400]
    }
  }
})

function CheckboxComp() {
  const [checked, setChecked] = React.useState(true);

  return <FormControlLabel
    control={<Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      icon={<SaveIcon />}
      checkedIcon={<CancelIcon />}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
    />}
    label="Testing Checkbox"
  />

}

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
        <header className="App-header">
          <AppBar color='secondary'>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6'>MUI Theme</Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography
            variant='h2'
          >Welcome to MUI</Typography>
          <Typography
            variant="subtitle1"//'body1'
          >
            Learn how to use Material UI
          </Typography>
          <img src={logo} className="App-logo" alt="logo" />
          <TextField
            variant="filled"//'outlined'
            color='secondary'
            type="email"
            label="Email"
            placeholder='Enter your email'
          />
          <CheckboxComp />
          <ButtonStyled />
          <ButtonGroup>
            <Button startIcon={<SaveIcon />} size="small" variant="contained" color="secondary" text="Save" style={{ fontSize: 10 }}>Save</Button>
            <Button startIcon={<CancelIcon />} size="small" variant="contained" color="primary" text="Cancel" style={{ fontSize: 10 }}>Cancel</Button>
          </ButtonGroup>
          
          <Grid 
            container
            spacing={2}
            justifyContent="center"
            >
            <Grid item xs={12} sm={6} lg={4}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>
        </header>
      </div>
      </Container>
      
    </ThemeProvider>

  );
}

export default App;
