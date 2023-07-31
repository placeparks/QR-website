import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MultistepForm = () => {
  const [formData, setFormData] = useState({
    date: new Date(),
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form submitted.",
      description: "We've received your submission.",
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  const Form1 = () => (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <DatePicker selected={formData.date} onChange={handleDateChange} />
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="name" fontWeight={"normal"}>Name</FormLabel>
          <Input id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" fontWeight={"normal"}>Email</FormLabel>
          <Input id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="phone" fontWeight={"normal"}>Phone</FormLabel>
        <Input id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      </FormControl>
    </>
  );

  const Form2 = () => (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">Service Selection</Heading>
      <FormControl>
        <FormLabel htmlFor="service" fontWeight={"normal"}>Service</FormLabel>
        <Select id="service" name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select a service</option>
          <option value="customSoftware">Custom software</option>
          <option value="mobileApplications">Mobile applications</option>
          <option value="softwareTesting">Software testing</option>
          <option value="employeeTraining">Employee training</option>
        </Select>
      </FormControl>
    </>
  );

  const Form3 = () => (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">Message</Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="message" fontWeight={"normal"}>Message</FormLabel>
        <Textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
      </FormControl>
    </>
  );

  return (
    
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
      as="form"
      onSubmit={handleSubmit}
    >
      <Progress
        hasStripe
        value={progress}
        mb="5%"
        mx="5%"
        isAnimated
      ></Progress>
      {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(progress - 33.33);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={step === 3}
              onClick={() => {
                setStep(step + 1);
                setProgress(progress + 33.33);
              }}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
          {step === 3 ? (
            <Button type="submit" w="7rem" colorScheme="red" variant="solid">
              Submit
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  );
};

export default MultistepForm;
