import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Breadcrumbs,
  Link,
  Divider,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import FooterSection from "./FooterSection";

const ContactPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        paddingTop: "64px",
      }}
    >
      
      <Paper
        sx={{
          background: "linear-gradient(to right, #c33764, #1d2671)",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            We'd love to hear from you. Reach out today!
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link
            href="/"
            underline="none"
            sx={{ "&:hover": { color: "#c33764" } }}
          >
            Home
          </Link>
          <Typography color="#c33764" fontWeight="bold">
            Contact
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 9, borderRadius: 3, boxShadow: 4 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#c33764"
                gutterBottom
              >
                Send Us a Message
              </Typography>
              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Subject"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #c33764, #1d2671)",
                    transform: "scale(1.03)",
                  },
                }}
              >
                Submit
              </Button>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 4,
              }}
            >
              <Box
                sx={{
                  background: "linear-gradient(to right, #c33764, #1d2671)",
                  color: "white",
                  // marginLeft:10,
                  p: 1,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ marginLeft: 22, color: "orange" }}
                  gutterBottom
                >
                  Zaph Tours HQ
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn
                    sx={{ mr: 2, color: "#f7bb97", marginLeft: 22 }}
                  />
                  <Typography variant="body1">Nairobi, Kenya</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone sx={{ mr: 2, color: "#f7bb97", marginLeft: 22 }} />
                  <Typography variant="body1">+254 785 493 852</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email sx={{ mr: 2, color: "#f7bb97", ml: 22 }} />
                  <Typography variant="body1">info@zaphtours.com</Typography>
                </Box>
              </Box>

              <Divider />

              <Box sx={{ height: 450, position: "relative" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19034290707!2d36.68275967671628!3d-1.302809894816087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1704963600000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

       
        <Box sx={{ mt: 6 }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: 4,
              // background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#c33764"
              gutterBottom
              textAlign="center"
            >
              Other Ways to Reach Us
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Phone
                    sx={{
                      fontSize: 40,
                      color: "#c33764",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Call Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Available 24/7 for emergency support
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Email
                    sx={{
                      fontSize: 40,
                      color: "#c33764",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Email Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We'll respond within 24 hours
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <LocationOn
                    sx={{
                      fontSize: 40,
                      color: "#c33764",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Visit Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday, 9 AM - 6 PM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default ContactPage;
