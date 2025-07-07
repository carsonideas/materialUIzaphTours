// import React from "react";
import {
  Container,
  Typography,
  // Grid,
  Paper,
  Avatar,
  Box,
} from "@mui/material";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    text: "Zaph Tours made our Kenya safari absolutely magical! The guides were knowledgeable and the wildlife viewing was incredible.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Sydney, Australia",
    text: "Mt. Kenya trek with Zaph Tours was the adventure of a lifetime! Professional service and breathtaking views.",
    avatar: "MC",
  },
  {
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    text: "The coastal Kenya tour exceeded all expectations. Beautiful beaches, amazing culture, and excellent hospitality!",
    avatar: "ER",
  },
  {
    name: "Alex Njeri",
    location: "Nairobi, Kenya",
    text: "Incredible experience from booking to the last day. Highly recommend Zaph Tours for both local and international adventures!",
    avatar: "AN",
  },
];

const TestimonialsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        Our Satisfied Customer Reviews!
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            // maxWidth: 1400
            marginRight: "10px",
          },
          gap: 4,
          justifyItems: "center",
          alignItems: "stretch",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Paper
              elevation={3}
              sx={{
                p: 0.1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: 220,
                // height: 300,
                maxWidth: 360,
                // background: "linear-gradient(to right, #c33764, #1d2671)",
                // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <Box>
                {/* <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginTop: 2,
                    image:
      //  "./image4.jpeg",
      // "https://content.api.news/v3/images/bin/25dc95c6f0f4f34d8e6e99623e7f4827",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOc_sbgqtP4OYOBwmf5Qht9ItLbxktPgEpw&s",
    
                  }}
                >
                  {testimonial.avatar}
                </Avatar> */}
                <Avatar
                // src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                src="https://www.baliquadbiking.com/wp-content/uploads/2025/06/Kuber-ATV-Bali-Adventure-Reviews.jpg.webp"
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 3,
                  background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginTop: 2,
                }}
              />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    minHeight: "90px",
                  }}
                >
                  "{testimonial.text}"
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.85, marginBottom: 2 }}
                >
                  {testimonial.location}
                </Typography>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
