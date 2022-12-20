import React, { useState, useEffect } from "react";
import { Box, Input, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import Post from "../Post/Post";

const Body = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=series&apikey=41363593")
      .then((res) => {
        setPosts(res?.data?.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const search = (data) => {
    return data.filter(
      (items) =>
        items.Title.toLowerCase().includes(query) ||
        items.Title.toUpperCase().includes(query) ||
        items.Year.toLowerCase().includes(query)
    );
  };
  return (
    <Box px={{ base: "28px", md: "77px" }} pt={{ base: "81px", md: "98px" }}>
      <Text>Search</Text>
      <Input
        onChange={(e) => setQuery(e.target.value)}
        width="full"
        mb={{ base: "33px", md: "48px" }}
        variant="outline"
        borderColor="black"
        rounded="none"
      />
      <Box>
        <Text>{posts?.Type}</Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap="10px"
        >
          {posts &&
            search(posts).map(({ Title, Poster, Type, Year, imdbID }) => (
              <GridItem key={imdbID}>
                <Post Title={Title} Poster={Poster} Year={Year} Type={Type} />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Body;
