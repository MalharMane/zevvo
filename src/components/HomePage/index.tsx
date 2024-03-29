import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../../../public/header_bg.png";
import vector from "../../../public/header_vector.png";

const index = () => {
  return (
    <Box mb="9rem" color="white">
      <Flex alignItems={{base: "center"}} flexDir={{base:"column-reverse", md:"row"}} gap={[20, 15, 15]}>
        {/* first container */}
        <Box ml={{base:0, md:14}} textAlign={{base: "center", md:"inherit"}} flex={0.5}>
          <Flex  pt={["0", "0", '2rem', '4rem']} flexDirection="column" gap={5} width={300}>
            <Text
              color="#0E2368"
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight={700}
              lineHeight={1.3}
            >
              Energizing Tomorrow With{" "}
              <Box as="span" color="#E23744">
                Zevvo{" "}
              </Box>
              Redefining Urban Mobility with Sustainable Innovation
            </Text>
            <Text fontSize="sm" color="#444957">
              Electric Vehicles
            </Text>
            <Button
              size="md"
              px={10}
              margin={{base: "auto", md:0}}
              width="max-content"
              colorScheme="red"
              color="white"
              borderRadius={40}
            >
              Explore Now!
            </Button>
          </Flex>
        </Box>
        {/* second container */}
        <Box flex={0.5} pos="relative" >
          <Image
            boxSize="auto"
            objectFit="cover"
            src={bg.src}
            alt="Dan Abramov"
          />
       
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
