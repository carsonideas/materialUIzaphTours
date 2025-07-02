// import React from "react";
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Height } from "@mui/icons-material";
// import type { BorderTop } from "@mui/icons-material";
// import { BorderLeft } from "@mui/icons-material";

const FixedHeader = () => {
  const buttonStyle = {
    background: "transparent",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 700,
    textTransform: "none",
    // padding: "10px 10px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    marginTop: '4px',
    
    // Height: 2,
    // border: "2px solid white",
    // borderLeft: '  3px solid blue',
    // borderTop: '  3px solid blue',

    '& .MuiButton-startIcon': {
      background: "linear-gradient(to right, #c33764, #1d2671)",
      borderRadius: "50%",
      // padding: "3px",
      transition: "all 0.3s ease",
      // Height: 20,
      // marginTop: '2px',
    },

    '&:hover': {
      // background: "linear-gradient(to right, #c33764, #1d2671)",
      transform: "translateY(-2px)",
      // border: '.001px solid white',
      borderLeft: '  4.5px solid pink',
      // border: '1px solid white',
      // Height: 20,


      '& .MuiButton-startIcon': {
        // background: "linear-gradient(to right, #a12f5a, #162050)",
        transform: "scale(1.1)",
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        // background: "rgba(0, 0, 0, 0.3)",
        background: "linear-gradient(to right, #dd5e89, #f7bb97)",
        // background: "linear-gradient(to right, #c33764, #1d2671)",
        // backdropFilter: "blur(10px)",
        // boxShadow: "none",
        // zIndex: 11000000000000,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Zaph Tours
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="text"
            startIcon={<HomeRoundedIcon />}
            component={Link}
            to="/"
            sx={buttonStyle}
          >
            Home
          </Button>
          
          <Button
            variant="text"
            startIcon={<TravelExploreIcon />}
            component={Link}
            to="/destinations"
            sx={buttonStyle}
          >
            Destinations
          </Button>
          
          <Button
            variant="text"
            startIcon={<FlightTakeoffIcon />}
            component={Link}
            to="/trip-types"
            sx={buttonStyle}
          >
            Trip Types
          </Button>
          
          <Button
            variant="text"
            startIcon={<ConnectWithoutContactIcon />}
            component={Link}
            to="/contact"
            sx={buttonStyle}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FixedHeader;