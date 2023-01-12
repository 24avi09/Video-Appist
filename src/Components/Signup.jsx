import React from 'react'
import { Container, VStack, Input, Button, Heading, Text, Avatar } from "@chakra-ui/react"
import{Link} from "react-router-dom"

const Signup = () => {
    return (
        <>
            <Container maxW={"container.xl"} h={"100vh"} p={"16"} >
                <form >
                    <VStack alignItems={"center"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"} >
                        <Heading>Video Hub</Heading>
                        
                        <Avatar alignSelf={"center"}  />
                        
                        <Input placeholder={'Name'} type={"text"} required focusBorderColor={"purple.500"} 
                        />
                        <Input placeholder={'Email'} type={"email"} required focusBorderColor={"purple.500"} />
                        <Input placeholder={'Password'} type={'password'} required focusBorderColor={"purple.500"} />

                        <Button colorScheme={"purple"} type={"submit"} p={"10px 164px"} >
                            Sign Up
                        </Button>

                        <Text alignSelf={"flex-end "} textAlign={'right'} >
                            Already Signed Up?{" "}
                            <Button variant={'link'} colorScheme={"purple"} >
                                <Link to={'/login'} >Log In</Link>
                            </Button>
                        </Text>


                    </VStack>
                </form>
            </Container>
        </>
    )
}


export default Signup