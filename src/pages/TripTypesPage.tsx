import GetStartedToday from "./GetStartedToday";

import {
  Box,
  Container,
  // Grid,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Typography,
  Button,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import FooterSection from "./FooterSection";

const tripTypes = [
  {
    title: "Safari Adventures",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Experience the Big Five and witness the Great Migration in Kenya's world-renowned national parks and reserves.",
    features: [
      "Game drives in luxury 4x4 vehicles",
      "Professional wildlife guides",
      "Luxury tented camps and lodges",
      "Photography workshops",
      "Cultural village visits",
    ],
    duration: "3-14 days",
    groupSize: "2-8 people",
    difficulty: "Easy to Moderate",
    price: "From $450/person",
  },
  {
    title: "Mountain Expeditions",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Conquer Africa's highest peaks including Mt. Kenya, Mt. Kilimanjaro, and the mystical Rwenzori Mountains.",
    features: [
      "Expert mountain guides",
      "All climbing equipment provided",
      "Acclimatization programs",
      "Mountain huts and camping",
      "Summit certificates",
    ],
    duration: "5-21 days",
    groupSize: "2-12 people",
    difficulty: "Moderate to Challenging",
    price: "From $1,200/person",
  },
  {
    title: "Beach & Coastal",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Relax on pristine white sand beaches, explore coral reefs, and enjoy water sports along the Indian Ocean.",
    features: [
      "Luxury beach resorts",
      "Snorkeling and diving",
      "Dhow sailing trips",
      "Spice island tours",
      "Swahili cooking classes",
    ],
    duration: "3-10 days",
    groupSize: "2-20 people",
    difficulty: "Easy",
    price: "From $850/person",
  },

  {
    title: "Safari Adventures",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Experience the Big Five and witness the Great Migration in Kenya's world-renowned national parks and reserves.",
    features: [
      "Game drives in luxury 4x4 vehicles",
      "Professional wildlife guides",
      "Luxury tented camps and lodges",
      "Photography workshops",
      "Cultural village visits",
    ],
    duration: "3-14 days",
    groupSize: "2-8 people",
    difficulty: "Easy to Moderate",
    price: "From $450/person",
  },
];

const TripTypesPage = () => (
  <Box
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%) ",
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
          Trip Types & Adventures
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Choose your ideal adventure across Kenya and East Africa
        </Typography>
      </Container>
    </Paper>

    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{ "&:hover": { color: "#c33764" } }}
        >
          Home
        </Link>
        <Typography color="#c33764" fontWeight="bold">
          Trip Types
        </Typography>
      </Breadcrumbs>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          },
          gap: 4,
        }}
      >
        {tripTypes.map((trip, index) => (
          <Box key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                borderRadius: 2,
                overflow: "hidden",
                // "&:hover": { boxShadow: 6 },
                // Removed duplicate width property
                width: { xs: 450, sm: 330, md: 439, lg: 559, xl: 560 },
                backgroundPosition: "center",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={trip.image}
                alt={trip.title}
              />
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  color="#c33764"
                >
                  {trip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {trip.description}
                </Typography>

                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="#dd5e89"
                >
                  What's Included:
                </Typography>
                <List dense sx={{ mb: 2 }}>
                  {trip.features.map((feature, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle fontSize="small" color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="caption" color="#999">
                    Duration:{" "}
                    <Typography
                      component="span"
                      variant="body2"
                      fontWeight="bold"
                      color="#c33764"
                    >
                      {trip.duration}
                    </Typography>
                  </Typography>
                  <Typography variant="caption" color="#999">
                    Group:{" "}
                    <Typography
                      component="span"
                      variant="body2"
                      fontWeight="bold"
                      color="#c33764"
                    >
                      {trip.groupSize}
                    </Typography>
                  </Typography>
                </Box>
                <Typography variant="caption" color="#999">
                  Difficulty:{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                    color="#c33764"
                  >
                    {trip.difficulty}
                  </Typography>
                </Typography>
                <Typography variant="caption" color="#999">
                  Price:{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                    color="#dd5e89"
                  >
                    {trip.price}
                  </Typography>
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                    borderRadius: "24px",
                    py: 1,
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <GetStartedToday />
    </Container>
    <FooterSection />
  </Box>
);

export default TripTypesPage;
