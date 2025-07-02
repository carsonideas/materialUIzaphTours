import { Box, Typography, Grid, Chip, Container } from "@mui/material";

const AboutSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        About Zaph Tours
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: { xs: 300, sm: 400, md: 500 },
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              //   boxShadow:
              //     "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            }}
          >
            <img
              // src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              //  src="./image4.jpeg"
              src="https://img.freepik.com/premium-photo/giraffe-having-fun-eating-popcorn-stylish-glasses_1084926-533.jpg?w=360"
              alt="African Safari with Elephants"
              style={{
                width: 500,
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                borderRadius: "19px",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#c33764", mb: 3 }}
          >
            Karibu Safari! Hakuna Matata
          </Typography>
          <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
            Zaph Tours is Kenya's premier travel company, dedicated to creating
            unforgettable safari and adventure experiences. With over a decade
            of expertise, we specialize in showcasing the breathtaking
            landscapes, diverse wildlife, and rich cultural heritage of Kenya
            and East Africa.
          </Typography>
          <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
            Our passionate team of local guides and travel experts ensure every
            journey is authentic, safe, and tailored to your dreams. From the
            majestic peaks of Mount Kenya to the pristine beaches of the Kenyan
            coast, we bring you closer to nature's wonders.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Chip
              label="Expert Guides"
              sx={{
                background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                color: "white",
              }}
            />
            <Chip
              label="10+ Years Experience"
              sx={{
                background: "linear-gradient(to right, #c33764, #1d2671)",
                color: "white",
              }}
            />
            <Chip
              label="100% Safe"
              sx={{
                background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                color: "white",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
