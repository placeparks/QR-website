"use client"
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"


export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("#1c1f1f", "#1c1f1f")}
      color={useColorModeValue("white", "white")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Text>Developed by Mirac.eth</Text>
        </Stack>
      </Container>
    </Box>
  )
}
