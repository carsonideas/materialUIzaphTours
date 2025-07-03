// import React from "react";
import { Paper, Typography, Button } from "@mui/material";

function GetStartedToday() {
  return (
    <Paper
      sx={{
        mt: 8,
        p: 6,
        textAlign: "center",
        background: "linear-gradient(to right, #c33764, #1d2671)",
        color: "white",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Simba! Ready for Your Adventure?
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        Contact us today to customize your perfect safari experience
      </Typography>
      <Button
        variant="contained"
        size="large"
        // to=="/contact"
        href="/contact"
        sx={{
          background: "linear-gradient(to right, #dd5e89, #f7bb97)",
          borderRadius: "30px",
          px: 4,
          py: 2,
          fontSize: "1.1rem",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "white",
            color: "#c33764",
            transform: "scale(1.05)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        Get Started Today
      </Button>
    </Paper>
  );
}

export default GetStartedToday;
