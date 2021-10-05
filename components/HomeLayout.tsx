import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Grid, Spinner } from "@chakra-ui/react";
import axios from "axios";

import HomeCard from "./HomeCard";

export default function HomeLayout() {
  const [games, setGames] = useState<any>(null);
  useEffect(() => {
    axios
      .get("http://localhost:1337/games")
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box mt={10} mx="auto" boxSize="xl" width="80%">
      {!games ? (
        <Flex justifyContent="center" h="70vh" alignItems="center">
          <Spinner color="telegram.600" size="xl" />
        </Flex>
      ) : (
        <Grid
          templateColumns={{
            xl: "repeat(5, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {games.map((item: any) => {
            return <HomeCard game={item} key={item.id} />;
          })}
        </Grid>
      )}
    </Box>
  );
}
