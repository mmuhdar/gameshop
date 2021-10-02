import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";

export default function HomeCard({ pokemon }: any) {
  const [detail, setDetail] = useState<any>({});
  useEffect(() => {
    axios
      .get(`${pokemon.url}`)
      .then(({ data }) => {
        setDetail(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const cardBackground = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex direction="column">
      <Box bg={cardBackground} p={3} rounded="xl">
        <Image
          objectFit="cover"
          src={detail?.sprites?.other["official-artwork"].front_default}
        />
      </Box>
      <Text mt={3} textAlign="center" fontWeight="bold">
        {detail.name}
      </Text>
    </Flex>
  );
}
