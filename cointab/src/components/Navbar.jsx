

import {Link} from "react-router-dom";
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {

    

  return (
    <div>

<Flex  justifyContent={{sm:"space-between", md:"center", lg:"space-between"}} padding="15px">
          
         
   
             <Box  display="flex" justifyContent="space-between" width={{sm:"100%", md:"100%", lg:"60%"}}>
             <Heading fontFamily="cursive">Cointab</Heading>
   
            
              

             
              </Box>

           <Link to="/home">Home</Link>
           <Link to="/login">Login</Link>
   
           </Flex>

    </div>
  )
}

export default Navbar
