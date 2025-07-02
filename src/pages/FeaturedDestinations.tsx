import GetStartedToday from "./GetStartedToday";
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  Button,
  // Paper,
} from "@mui/material";

const destinations = [
  {
    name: "Mt. Kenya",
    image:
    // "/image5.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOc_sbgqtP4OYOBwmf5Qht9ItLbxktPgEpw&s",
      // "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    description: "Africa's second highest peak with alpine scenery and hiking.",
    price: "$1,200",
  },
  {
    name: "Mt. Longonot",
    image:

      // "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      "https://i.cbc.ca/1.3372480.1450473649!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/comedy-wildlife-photography-awards-dancing-sifaka-dec-2015.jpg?im=Resize%3D1180",
      description: "The legendary Mountains of the Moon with unique flora.",
    price: "$1,800",
  },
  {
    name: "Lake Nakuru",
    image:
      // "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://i.ytimg.com/vi/EXVk1IjV9GU/sddefault.jpg?v=631cdfde",
      
      description: "Famous for flamingos and bird species around the lake.",
    price: "$450",
  },
  {
    name: "Tsavo National Park",
    image:

      // "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQW4PEwgW-2K4wtJag4z4PYlJf9fH8zm1r-PmK2jrV2XyKhKaVOrgybpZq9MSXfvLwJA&usqp=CAU",
      
      description: "Kenya's largest national park with red elephants and lions.",
    price: "$680",
  },
  {
    name: "Nairobi National Park",
    image:
      // "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      "https://i.pinimg.com/736x/1b/40/f0/1b40f08f6d48eeca5359fbf45da4174c.jpg",
      // "https://i.pinimg.com/736x/ac/c2/f2/acc2f2506f2399aa46e87f97a2eb2095.jpg",
      description: "Urban park with wildlife and city skyline backdrop.",
    price: "$280",
  },
  {
    name: "Coastal Kenya",
    image:
      "https://prod.static9.net.au/fs/646e6914-cc2a-452e-82ce-b40120e6b82f",
    // "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    // "https://i.cbc.ca/1.3372522.1450474155!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/comedy-wildlife-photography-awards-last-tango-2015.jpg?im=Resize%3D1180",
    description: "White sand beaches, coral reefs, and rich Swahili culture.",
    price: "$850",
  },
];

const FeaturedDestinations = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 3 }}>
           Featured Destinations
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {destinations.map((dest, i) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: 250, md: 350 },
                // height: 600
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  width: 350,
                  // maxWidth: 350,
                  boxShadow: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    // width: { xs: 500, md: 250 },
                    // height: { xs: 200, md: 250 },
                    backgroundImage: `url(${dest.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: 0,
                    height: 400,
                  }}
                />
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#c33764", mb: 1 }}>
                    {dest.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, lineHeight: 1.6, flexGrow: 1 }}
                  >
                    {dest.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#dd5e89", fontWeight: "bold" }}
                    >
                      From {dest.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        background:
                          "linear-gradient(to right, #dd5e89, #f7bb97)",
                        borderRadius: "20px",
                        px: 2,
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #c33764, #1d2671)",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* i have repeated this component "the getstarted" alot. i have to call it so as to simplify my code. */}

        <GetStartedToday />
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
