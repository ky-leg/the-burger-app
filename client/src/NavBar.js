import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavBar({ user, onLogin }) {

  const [value, setValue] = React.useState(4);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
      }
    });
  }

  return (
    <Container sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Box sx={{ width: '100%' }}>
        <Box >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab 
              component={Link}
              to={`/user/${user.id}`}
              label={user.username}
              {...a11yProps(0)}
              />
            <Tab 
              component={Link}
              to="/ratings/new"
              label="New Review"
              {...a11yProps(1)}>
            </Tab>
            <Tab 
              component={Link}
              to="/restaurants"
              label="Restaurants"
              {...a11yProps(2)}>
            </Tab>
            <Tab 
              onClick={() => handleLogoutClick()}
              label="Logout"
              {...a11yProps(3)}>
            </Tab>
            <Tab 
              sx={{mx: 'auto'}}
              component={Link}
              to="/"
              label="WKND EATR">
            </Tab>
          </Tabs>
        </Box>
      </Box>
  </Container>
  );
}


export default NavBar;
