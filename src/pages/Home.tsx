// import React from 'react';

import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FeaturedDestinations from "./FeaturedDestinations";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";

// import DestinationsPage from './DestinationsPage';
// import App from 'App';

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </Box>
  );
};

export default Home;
