import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormHelperText,
    useToast,
   
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  
  export default function Signup() {
  
    const initial={
           
            email:"",
            password:""
           
    }
  
    const [user,setuser]=useState(initial);
  
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast()
    const [formErrors, setFormErrors] = useState({});
    const [loading, setloading] = useState(false);
    const navigate=useNavigate(); 
  
    const handlechange=(e)=>{
  
      const {name,value}=e.target;
  
      setuser({...user,[name]:value});
            
      setFormErrors(validate(user));
     
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      
     
      
        if(Object.keys(formErrors).length === 0){
               
          setloading(true);
  
        
          try{
          
            let res=await fetch("https://cointabback.onrender.com/user/register",{
              method:'POST',
              body:JSON.stringify(user),
              headers:{
                "Content-Type":"application/json"
              }
            })
            res=await res.json();
          
            
            setloading(false);
            toast({
              title: `${res.msg}`,
              position:"top",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
  
            navigate("/login");
          }
          catch(err){
            setloading(false);
  
            toast({
              title: 'Signup failed try again',
              position:"bottom",
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
            console.log(err)
          }    
  
          }
  
    }
  
    
  
  
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
  
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
  
  
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } 
      else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
  
  
      return errors;
    }
  
    
   console.log(user)
  
    return (
      <Flex pt={14}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={user.email} onChange={handlechange}/>
                <FormHelperText textAlign="left" color="red">{formErrors.email}</FormHelperText>
              </FormControl>
              
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name="password" value={user.password} onChange={handlechange}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="left" color="red">{formErrors.password}</FormHelperText>
  
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleSubmit}
                isLoading={loading}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                 
                >
                  Sign up
                </Button>
                
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login"><span style={{color:"blue"}}>Login</span></Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }