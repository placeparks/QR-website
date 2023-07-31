import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue, 
    Image,
    Flex,
  } from "@chakra-ui/react"
  import logo from '../images/logo.png';
  import {
    MdEmail,
    MdLocationOn,
  } from "react-icons/md"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("#1c1f1f", "#1c1f1f")}
      color={useColorModeValue("white", "white")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={4}>
          <Text fontSize={"md"}>
           QR Tracker App
            </Text>
            <Text fontSize={"md"} mb={-4}>
          Powered By:
            </Text>
            <Box>
              <Image src={logo} w={200}/>
            </Box>
           
          </Stack>
      
<Stack align={"flex-start"}>
  <ListHeader>Quick Links</ListHeader>
  <Box as="a" href={"#services"}>
              Services
            </Box>

<Box as="a" href={"#contact"}>
              Contact
            </Box>
</Stack>
        
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Flex align="center">
              <MdLocationOn color="#1970F1" size="20px" />
              <Text ml={2}>50-N Gurumangat Road,Gulberg.<br />Lahore, Punjab PK</Text>
            </Flex>
            <Flex align="center">
              <MdEmail color="#1970F1" size="20px" />
              <Text ml={2}>placeparks@gmail.com</Text>
            </Flex>
          
          </Stack>
      
        </SimpleGrid>
      </Container>
    </Box>
  )
}
