import { useEffect, useState } from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Button,
  Spinner,
  Input,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";

export default function CheckoutLayout(props: any) {
  const [items, setitems] = useState<any>(null);
  const checkoutBackground = useColorModeValue("gray.200", "gray.700");
  const nominalBackgroubd = useColorModeValue("gray.300", "gray.600");

  const { id } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:1337/games/${id}`)
      .then(({ data }) => {
        setitems(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Box h="full" w={{ xl: "80%", sm: "90%", md: "80%", lg: "80%" }} mx="auto">
      {!items ? (
        <Flex justifyContent="center" h="70vh" alignItems="center">
          <Spinner color="telegram.600" size="xl" />
        </Flex>
      ) : (
        <Box w={{ xl: "70%", lg: "70%", sm: "100%" }} mx="auto">
          <Flex direction="column">
            <Box bg={checkoutBackground} p={3} rounded="xl">
              <Flex alignItems="center">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  p={3}
                  bg="telegram.400"
                  rounded="lg"
                  color="white"
                >
                  1
                </Text>
                <Text fontSize="lg" fontWeight="bold" ml={3}>
                  Masukkan User ID
                </Text>
              </Flex>
              <Input
                w={{ xl: "50%", sm: "100%" }}
                mt={3}
                placeholder="Masukkan ID"
                focusBorderColor="telegram.400"
                borderColor="telegram.600"
                border="2px"
              />
            </Box>
            <Box bg={checkoutBackground} p={3} rounded="xl" mt={3}>
              <Flex alignItems="center">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  p={3}
                  bg="telegram.400"
                  rounded="lg"
                  color="white"
                >
                  2
                </Text>
                <Text fontSize="lg" fontWeight="bold" ml={3}>
                  Pilih nominal
                </Text>
              </Flex>
              <Grid templateColumns="repeat(3, 1fr)" mt={3} gap={3}>
                {items?.items?.map((item: any) => {
                  return (
                    <Button key={item.id} bg={nominalBackgroubd}>
                      {item.amount} {item.name}
                    </Button>
                  );
                })}
              </Grid>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
