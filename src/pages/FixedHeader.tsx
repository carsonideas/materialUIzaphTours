// import React from "react";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const FixedHeader = () => {
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
        <Box sx={{ display: "flex", gap: 3 }}>
          <button
            style={{
              background: "linear-gradient(to right, #c33764, #1d2671)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.4rem",
                fontWeight: "1000",
                transition: "color 0.3s ease",
              }}
            >
              Home
            </Link>
          </button>
          <button
            style={{
              background: "linear-gradient(to right, #c33764, #1d2671)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/destinations"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.4rem",
                fontWeight: "1000",
                transition: "color 0.3s ease",
              }}
            >
              Destinations
            </Link>
          </button>
          <button
            style={{
              background: "linear-gradient(to right, #c33764, #1d2671)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/trip-types"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.4rem",
                fontWeight: "1000",
                transition: "color 0.3s ease",
              }}
            >
              Trip Types
            </Link>
          </button>
          <button
            style={{
              background: "linear-gradient(to right, #c33764, #1d2671)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/contact"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.4rem",
                fontWeight: "1000",
                transition: "color 0.3s ease",
              }}
            >
              Contact Us
            </Link>
          </button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FixedHeader;
