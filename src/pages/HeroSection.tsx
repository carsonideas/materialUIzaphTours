// import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  // AppBar,
  // Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Paper
      sx={{
        height: "100vh",
        background:
          'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5")',
          // 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=")',
        // 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/image2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        color: "white",
        position: "relative",
        paddingTop: "64px",
      }}
    >
  
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Zaph Tours Safari
          </Typography>
          {/* <Typography variant="h4" gutterBottom>
            Karibu Safari! Hakuna Matata
          </Typography> */}
          <Typography variant="h4" gutterBottom>
            Safari bila was! was!
          </Typography>

          <Link to="/destinations" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                borderRadius: "30px",
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(to right, #c33764, #1d2671)",
                },
              }}
            >
              Start Your Adventure
            </Button>
          </Link>
        </Container>
      </Box>
    </Paper>
  );
};

export default HeroSection;
