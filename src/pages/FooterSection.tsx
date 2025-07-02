import {
  Box,
  Container,
  // Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const FooterSection = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Zaph Tours
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
              Your premier destination for unforgettable adventures across Kenya
              and East Africa. Experience the wild, climb the peaks, and discover
              the beauty of Africa with us.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#dd5e89" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#home"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#dd5e89",
                    textDecoration: "underline",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#dd5e89",
                    textDecoration: "underline",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="#destinations"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#dd5e89",
                    textDecoration: "underline",
                  },
                }}
              >
                Destinations
              </Link>
              <Link
                href="#trip-types"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#dd5e89",
                    textDecoration: "underline",
                  },
                }}
              >
                Trip Types
              </Link>
              <Link
                href="#contact"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#dd5e89",
                    textDecoration: "underline",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Box>

          {/* Services */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#dd5e89" }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2">Safari Adventures</Typography>
              <Typography variant="body2">Mountain Expeditions</Typography>
              <Typography variant="body2">Beach & Coastal Tours</Typography>
              <Typography variant="body2">Cultural Experiences</Typography>
              <Typography variant="body2">Photography Tours</Typography>
              <Typography variant="body2">Custom Packages</Typography>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#dd5e89" }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ color: "#dd5e89" }} />
                <Typography variant="body2">
                  Nairobi, Kenya
                  <br />
                  P.O. Box 12345-00100
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ color: "#dd5e89" }} />
                <Typography variant="body2">+254 700 123 456</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ color: "#dd5e89" }} />
                <Typography variant="body2">info@zaphtours.com</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 Zaph Tours. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#privacy"
              color="inherit"
              underline="none"
              sx={{
                opacity: 0.8,
                "&:hover": {
                  color: "#dd5e89",
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              color="inherit"
              underline="none"
              sx={{
                opacity: 0.8,
                "&:hover": {
                  color: "#dd5e89",
                  textDecoration: "underline",
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;

