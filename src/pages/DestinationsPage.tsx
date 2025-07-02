import { useState } from "react";
import {
  Box,
  Container,
  // Grid,
  Card,
  Paper,
  Typography,
  Button,
  Chip,
  Breadcrumbs,
  Link,
  Pagination,
} from "@mui/material";

import FooterSection from "./FooterSection";
import GetStartedToday from "./GetStartedToday";

const DestinationsPage = () => {
  const destinations = [
    {
      name: "Mt. Kenya",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Africa's second highest peak offering incredible climbing and hiking experiences with stunning alpine scenery and diverse wildlife.",
      groupPrice: "$1,200",
      individualPrice: "$1,800",
    },
    {
      name: "Mt. Longonot",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "The legendary Mountains craters with unique flora, glaciers, and challenging trekking routes through mystical landscapes.",
      groupPrice: "$1,800",
      individualPrice: "$2,400",
    },
    {
      name: "Lake Nakuru",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Famous for its flamingo populations and diverse bird species in this spectacular alkaline lake surrounded by acacia woodlands.",
      groupPrice: "$450",
      individualPrice: "$650",
    },
    {
      name: "Tsavo National Park",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Kenya's largest national park, home to the famous red elephants, lions, leopards and diverse wildlife in vast savannah landscapes.",
      groupPrice: "$680",
      individualPrice: "$920",
    },
    {
      name: "Nairobi National Park",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Unique urban wildlife park with lions, giraffes, rhinos and zebras against the city skyline backdrop - truly one of a kind.",
      groupPrice: "$280",
      individualPrice: "$380",
    },
    {
      name: "Coastal Kenya",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Pristine white sand beaches, coral reefs, and rich Swahili culture along the Indian Ocean with crystal clear waters.",
      groupPrice: "$850",
      individualPrice: "$1,150",
    },
    {
      name: "Amboseli National Park",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Famous for its large elephant herds and stunning views of Mount Kilimanjaro across the border in Tanzania.",
      groupPrice: "$720",
      individualPrice: "$950",
    },
    {
      name: "Samburu National Reserve",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Home to unique wildlife species including Grevy's zebras, reticulated giraffes, and Somali ostriches in arid landscapes.",
      groupPrice: "$590",
      individualPrice: "$780",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 6;
  const totalPages = Math.ceil(destinations.length / destinationsPerPage);

  const startIndex = (currentPage - 1) * destinationsPerPage;
  const currentDestinations = destinations.slice(
    startIndex,
    startIndex + destinationsPerPage,
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

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
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Our Amazing Destinations
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Discover breathtaking locations across Kenya and East Africa
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link
            color="inherit"
            href="#"
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: "#c33764",
                // height:100,
              },
            }}
          >
            Home
          </Link>
          <Typography sx={{ color: "#c33764", fontWeight: "bold" }}>
            Destinations
          </Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {currentDestinations.map((destination, index) => (
            <Box key={index}>
              <Card
                sx={{
                  width: { xs: 450, sm: 330, md: 439, lg: 559, xl: 560 },
                  // width: { xs: 450, sm: 330, md: 439, lg: 559 }
                  // height: { xs: 450, sm: 330, md: 439, lg: 559 }
                  //  width:500,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "15px",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 700,
                    background: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                      color: "white",
                      px: 2,
                      py: 1,
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Popular
                  </Box>
                </Box>

                <Box
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      color: "#c33764",
                      fontWeight: "bold",
                    }}
                  >
                    {destination.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      mb: 3,
                      lineHeight: 1.6,
                      color: "#666",
                    }}
                  >
                    {destination.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#dd5e89",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      Pricing Options:
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                    >
                      <Chip
                        label={`Group: ${destination.groupPrice}`}
                        sx={{
                          background:
                            "linear-gradient(to right, #dd5e89, #f7bb97)",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                      <Chip
                        label={`Individual: ${destination.individualPrice}`}
                        sx={{
                          background:
                            "linear-gradient(to right, #c33764, #1d2671)",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    href="#destination-details"
                    sx={{
                      background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                      borderRadius: "30px",
                      py: 1.5,
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #c33764, #1d2671)",
                        transform: "scale(1.05)",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Pagination */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                "&.Mui-selected": {
                  background: "linear-gradient(to right, #dd5e89, #f7bb97)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #c33764, #1d2671)",
                  },
                },
              },
            }}
          />
        </Box>

        <GetStartedToday />
      </Container>
      <FooterSection />
    </Box>
  );
};

export default DestinationsPage;
