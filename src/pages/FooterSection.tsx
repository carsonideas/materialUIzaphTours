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
        // background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        py: 6,
        mt: 8,
        // background: "linear-gradient(to right, #c33764, #1d2671)"
        background: "linear-gradient(to right, #dd5e89, #f7bb97)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
              marginLeft: "60px",
            },
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                //  color: "black",
              }}
            >
              Zaph Tours
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
              Your premier destination for unforgettable adventures across Kenya
              and East Africa. Experience the wild, climb the peaks, and
              discover the beauty of Africa with us.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "white",

                  // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  background: "linear-gradient(to right, #c33764, #1d2671)",

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

                  // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  background: "linear-gradient(to right, #c33764, #1d2671)",

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

                  // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  background: "linear-gradient(to right, #c33764, #1d2671)",

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

                  // background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  background: "linear-gradient(to right, #c33764, #1d2671)",

                  "&:hover": {
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "purple" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "purple",
                    textDecoration: "underline",
                    borderLeft: "3px solid purple",
                    borderRight: "3px solid purple",
                    // marginleft: '2px'
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    marginRight: "190px",
                  },
                }}
              >
                Home
              </Link>

              <Link
                href="/destinations"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "purple",
                    textDecoration: "underline",
                    borderLeft: "3px solid purple",
                    borderRight: "3px solid purple",
                    // marginleft: '2px'
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    marginRight: "150px",
                  },
                }}
              >
                Destinations
              </Link>
              <Link
                href="/trip-types"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "purple",
                    textDecoration: "underline",
                    borderLeft: "3px solid purple",
                    borderRight: "3px solid purple",
                    // marginleft: '2px'
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    marginRight: "160px",
                  },
                }}
              >
                Trip Types
              </Link>
              <Link
                href="/contact"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "purple",
                    textDecoration: "underline",
                    borderLeft: "3px solid purple",
                    borderRight: "3px solid purple",
                    // marginleft: '2px'
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    marginRight: "180px",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "purple" }}
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
            // gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              // marginLeft: '200px',
              // background: 'white',
              color: "white",
              fontSize: 29,
              margin: "auto",
            }}
          >
            © 2025 Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;
