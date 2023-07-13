import {
  AppBar,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../store/slices/auth';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(function (state: RootState) {
    return state.auth.user;
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    // ejecutar una accion del reducer para limpiar el usuario
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      elevation={5}
      sx={{
        padding: '20px',
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6">My App</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item display="flex" alignItems="center">
            <Typography variant="h6"></Typography>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout} disableRipple>
          <LogoutIcon
            sx={{
              marginRight: '10px',
            }}
          />
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
