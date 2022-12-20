import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Post = ({ Title, Poster, Year, Type }) => {
  return (
    <Box>
      <Text
        fontWeight="400"
        fontSize={{ base: "18px", md: "24px" }}
        lineHeight={{ base: "23px", md: "31px" }}
        w={{ base: "210px", md: "273px" }}
      >
        {Type}
      </Text>
      <Image src={Poster} alt={Title} rounded="md" />
      <Text
        fontWeight="400"
        fontSize={{ base: "14px", md: "20px" }}
        lineHeight={{ base: "23px", md: "31px" }}
        w={{ base: "210px", md: "273px" }}
      >
        {Title}
      </Text>
    </Box>
  );
};

export default Post;
