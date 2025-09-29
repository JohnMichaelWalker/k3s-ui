import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcons from "./dashboard/DashboardItems";
import Avatar from '@mui/material/Avatar';

export default () => {

  const icon = './jlogo.png'

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            src={icon}
            alt={`poo logo`}
            sx={{ width: 40, height: 40, marginRight: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            john's k3s dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <DashboardIcons />
    </>
  );
}
