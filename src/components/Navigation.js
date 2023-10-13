import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="logo" style={{ maxWidth: '100px', display: 'flex', alignItems: 'center' }}>
            <img src="/logofff.png" alt="Logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />

          </div>
          <Button color="inherit" component="div" sx={{ flexGrow: 1, marginLeft: "-30px" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          </Button>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginLeft: "50px"}}>
            <Link to="/" style={{ color: "white" }}>Home</Link>
          </Typography> */}
          <Button color="inherit" component="div">
            <Link to="/SignUp" style={{ color: "white" }}>Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}