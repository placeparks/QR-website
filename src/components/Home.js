import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading
  } from "@chakra-ui/react"
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://cdn.b12.io/media/e6228850-3c93-11e8-9369-0242ac11000f-pexels-photo-129205-hero_image.jpeg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 2, md: 4, lg: 4 })}  // decreased padding here
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"3xl"} align={"flex-start"} spacing={6}>
            <Flex direction={{ base: 'column', md: 'row' }} align={'center'} className="qr-heading">
              <Heading fontSize={{ base: '4xl', md: '7xl', lg: '9xl' }} mr={{ md: '6' }}>
                <Text as={'span'} color={'white'}>QR</Text>
              </Heading>
              <Flex direction={'column'} align={{ base: 'center', md: 'start' }}>
                <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} color={'white'} >
                  <Text as={'span'}>Tracker</Text>
                </Heading>
                <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} color={'white'}>
                  <Text as={'span'}>App</Text>
                </Heading>
              </Flex>
            </Flex>
            <Text fontSize={{base: '1xl', md: '2xl', lg: '2xl'}} color={'white'}>
              QR Tracker is the groundbreaking mobile application that revolutionizes the way we handle emergency situations. Our innovative QR code system allows for instant notifications to be sent, ensuring prompt response and assistance from the owner.
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"#c19957"}
                rounded={"medium"}
                color={"white"}
                _hover={{  bg: "whiteAlpha.500" }}
              >
                SHOW ME MORE
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    )
  }
  