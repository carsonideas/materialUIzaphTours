// import React from "react";
import { Paper, Container, Grid, Typography, Chip, Box } from "@mui/material";

const FooterSection = () => {
  return (
    <Paper
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        py: 6,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ color: "#dd5e89" }}>
              Zaph Tours
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Your trusted partner for unforgettable safaris and adventures in
              Kenya and East Africa.
            </Typography>
            <Typography variant="body2">
              📧 info@zaphtours.com
              <br />
              +254 700 123 456
              <br />
              Nairobi, Kenya
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Safari Packages
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Mountain Climbing
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Beach Tours
            </Typography>
            <Typography variant="body2">• Contact Us</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Stay connected for the latest updates and travel inspiration!
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Chip
                label="Facebook"
                sx={{ background: "#dd5e89", color: "white" }}
              />
              <Chip
                label="Instagram"
                sx={{ background: "#f7bb97", color: "white" }}
              />
              <Chip
                label="Twitter"
                sx={{ background: "#c33764", color: "white" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              background: "linear-gradient(to right, #dd5e89, #f7bb97)",
              height: 50,
              paddingTop: 5,
              // background: "rgba(0, 0, 0, 0.3)",
              // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
              // background: "linear-gradient(to right, #c33764, #1d2671)",
              // backdropFilter: "blur(10px)",
              // boxShadow: "none",
              // zIndex: 1100,
            }}
          >
            © 2024 Zaph Tours. All rights reserved. Best Safaris and
            Adventures.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default FooterSection;
