import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from './Images/trans.png'


import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const movePage = useNavigate();

  function goContents(){  
    movePage('/contents');
  }
  function goIntroduce(){  
    movePage('/introduce');
  }
  function goHome(){  
    movePage('/');
  }
  function goVision(){  
    movePage('/vision');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <img src={Logo} alt="logo" height="100" width="100" />
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            SWAVE
          </Typography>
          <Button color="inherit" onClick={goHome}>Home</Button>
          <Button color="inherit" onClick={goIntroduce}>Introduce</Button>
          <Button color="inherit" onClick={goContents}>Contents</Button>
          <Button color="inherit" onClick={goVision}>Vision</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}