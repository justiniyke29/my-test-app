import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Box
        bg="#292929"
        h={{ base: "67px", md: "140px" }}
        pt={{ base: "16px", md: "40px" }}
        pl={{ base: "107px", md: "321px", xl: "78px" }}
      >
        <Box
          border="1px solid #FFFFFF"
          h={{ base: "34px", md: "60px" }}
          w={{ base: "108px", md: "193px" }}
        >
          <Image
            src="/MyTestApp.png"
            alt="MyTestApp"
            py={{ base: "8px", md: "14px" }}
            px={{ base: "11px", md: "19px" }}
          />
        </Box>
      </Box>
      <Box>
        <Image src="/cinema.png" alt="cinema" />
        <Text
          fontSize={{ base: "28px", md: "72px" }}
          lineHeight={{ base: "36px", md: "94px" }}
          fontWeight="700"
          fontStyle="normal"
          position="absolute"
          top={{ base: "98px", md: "150px", lg: "247px" }}
          left={{ base: "40px", md: "172", xl: "77px" }}
          w={{ base: "273px", md: "490px" }}
          h={{ base: "72px", md: "282px" }}
          color="#FFFFFF"
        >
          Watch something incredible.
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
