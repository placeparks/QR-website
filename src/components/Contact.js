import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from "@chakra-ui/react"
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail
} from "react-icons/md"
import {  BsInstagram, BsPerson } from "react-icons/bs"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    setIsFormValid(name && email && message);
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill in all fields before sending the message.');
      return;
    }

    setIsLoading(true);

    emailjs.sendForm('service_4r4xx3e', 'template_ob8ypxg', form.current, 't_NkU5u7x-KOk0AID')
    .then((result) => {
        console.log(result.text);
        alert('Email successfully sent!');
        setName('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
      }, (error) => {
        console.log(error.text);
        alert('There was an error sending your message. Please try again later.');
        setIsLoading(false);
      });
  };

  return (
    <div style={{backgroundColor:"#121414"}}>
      <Container maxW="full" mt={0} centerContent overflow="hidden" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <Flex>
          <Box color="white" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 4, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 4, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading style={{fontFamily:"'Inria Serif', serif", textAlign:"center" }}>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500" align="start" style={{textAlign:"center"}}>
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} style={{ fontFamily:"Inria Serif"}}>
                      <VStack pl={0} spacing={3} alignItems={{ base: "center", md: "start"}}>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        >
                          +92-3157456388
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          support@blockwisetech.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                        >
                          50-N Gurumangat Road,Gulberg.<br />
                          Lahore, Punjab PK
                        </Button>
                      </VStack>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      >
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<MdFacebook size="28px" />}
                        />
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsInstagram size="28px" />}
                        />
                      </HStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="2000">
                  <Box bg="#000" borderRadius="lg">
                    <Box m={10} p={8} color="white">
                    <form onSubmit={sendEmail} ref={form}>
      <VStack spacing={5}>
        <FormControl id="user_name">
          <FormLabel>Your Name</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <BsPerson color="gray.800" />
            </InputLeftElement>
            <Input type="text" size="lg" name='from_name' value={name} onChange={e => setName(e.target.value)} />
          </InputGroup>
        </FormControl>
        <FormControl id="email">
          <FormLabel>Mail</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <MdOutlineEmail color="gray.800" />
            </InputLeftElement>
            <Input type="email" size="lg" name='user_email' value={email} onChange={e => setEmail(e.target.value)} />
          </InputGroup>
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            name='message'
            onChange={e => setMessage(e.target.value)}
            borderColor="gray.300"
            _hover={{ borderRadius: "gray.300" }}
            placeholder="message"
          />
        </FormControl>
                          <FormControl id="submit" float="right">
      <Button
        type="submit"
        variant="solid"
        bg="#c19957"
        color="white"
        _hover={{}}
        size='lg'
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </FormControl>
                        </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
