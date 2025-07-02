
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
} from "@mui/material";

const ContactPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        paddingTop: "64px",
      }}
    >
      {/* Header */}
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
        {/* Breadcrumbs */}
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
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
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

          {/* Contact Info / Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                borderRadius: 3,
                // overflow: 'hidden',
                // height: '80%',
                // background: 'url("https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80") center/cover no-repeat',
                background: "orange",
                // background: 'linear-gradient(to right, #dd5e89, #f7bb97)',
                // background: 'linear-gradient(to right, #c33764, #1d2671)',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                // color: 'white',
                // p: 4,
                // textAlign: 'center',
                // // width: 1000,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: 2,
                  p: 4,
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Zaph Tours HQ
                </Typography>
                <Typography>
                  Nairobi, Kenya
                  <br />
                  Phone: +254 712 345 678
                  <br />
                  Email: info@zaphtours.com
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;

