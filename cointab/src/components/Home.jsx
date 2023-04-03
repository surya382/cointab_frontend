

import { Button, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Authcontext } from '../context/Authcontext';

const Home = () => {

  const {authstate,logout}=useContext(Authcontext);

  return (
    <div>
         
         {authstate.email && <Heading fontFamily="cursive" size="md" >{authstate.email}</Heading>} 
         {authstate.email && <Button fontFamily="cursive"   backgroundColor="#f22d65" onClick={()=>logout()}>Logout</Button>}
    </div>
  )
}

export default Home