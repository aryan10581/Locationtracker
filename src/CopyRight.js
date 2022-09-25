import { ChakraProvider, Grid, Text, Flex } from '@chakra-ui/react'
import React from 'react'

export default function CopyRight(props) {
    return (
        <ChakraProvider>
            <Grid mt={"5vh"} minH={"50vh"} placeItems={"center"} pt={"10vh"} color={  "white"} bg={  "#a900ff"} placeContent={"center"}>
                <Text fontWeight={"700"} fontSize={["2xl", "4xl"]}>
                    WebDevVision
                </Text>
                <Text fontWeight={"700"} mt={"5vh"} fontSize={["md", "xl"]}>
                    Copyright 2022 &copy; WebDevVision
                </Text>
                <Flex w="80vw" mt={"5vh"} justifyContent={"space-evenly"} p={"1vw"} borderRadius={"50px"} alignSelf={"center"} alignItems={"center"}>
                    <Text fontSize={"2xl"} fontWeight={"700"} >
                        Visit Us
                    </Text>
                    <Grid w={["8vw", "6vw", "4vw", "3vw"]}>

                        <a href="https://app.netlify.com/teams/aryan10581/overview">
                            <img style={{ borderRadius: "50px" }} src="https://miro.medium.com/max/3150/0*BRl-uL7N9LF-1hiD.png" alt="" />
                        </a>
                    </Grid>
                    <Grid w={["8vw", "6vw", "4vw", "3vw"]}>

                        <a href="https://github.com/aryan10581">
                            <img style={{ borderRadius: "50px" }} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        </a>
                    </Grid>
                    <Grid w={["8vw", "6vw", "4vw", "3vw"]}>

                        <a href="https://www.frontendmentor.io/profile/aryan10581">
                            <img style={{ borderRadius: "50px" }} src="https://seeklogo.com/images/F/frontend-mentor-logo-DD85EFE0E9-seeklogo.com.png" alt="" />
                        </a>
                    </Grid>
                    <Grid w={["8vw", "6vw", "4vw", "3vw"]}>

                        <a href="https://www.youtube.com/c/webdevvision">
                            <img style={{ borderRadius: "50px" }} src="https://i.pinimg.com/originals/09/f4/72/09f4726125ab5fa8cbcf754b9ba07e7c.jpg" alt="" />
                        </a>
                    </Grid>
                </Flex>
            </Grid>
        </ChakraProvider>
    )
}