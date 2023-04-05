import { ReactNode, SetStateAction } from 'react';
import Image from "next/image"

 
 import { useState } from "react"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Text,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Links = ['Home', 'Projects', 'Testimonials', "Contents"];


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} 
      position="static"
      w={"full"}
     
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} z-index={20} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box  rounded={'full'} >
              <Image src="/img/logo.jpg" alt="" width={50} height={50} /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} z-index={20} >
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'/img/logo'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Image
                      
                       src="/img/logo.jpg" alt="" width={50} height={50}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Profile</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                  
                 <a href="#Contact">About</a> </MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>Newsletter</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}

// import { useState } from "react"
// import { useColorMode, Button, Box, Flex, Text } from "@chakra-ui/react"
// import { SketchPicker } from "react-color"

// function App() {
//   const [bgColor, setBgColor] = useState("#ffffff")
//   const [showPicker, setShowPicker] = useState(false)
//   const { colorMode, toggleColorMode } = useColorMode()

//   const handleColorChange = (color) => {
//     setBgColor(color.hex)
//   }

//   const handlePickerToggle = () => {
//     setShowPicker((show) => !show)
//   }

//   return (
//     <Flex direction="column" align="center" justify="center" minHeight="100vh">
//       <Text fontSize="3xl" mb={4}>
//         Color Picker Example
//       </Text>
//       <Box w="200px" h="200px" bg={bgColor} rounded="md" boxShadow="md" mb={4} />
//       <Button onClick={handlePickerToggle} mb={4}>
//         Pick Color
//       </Button>
//       {showPicker && (
//         <SketchPicker color={bgColor} onChange={handleColorChange} />
//       )}
//       <Button onClick={toggleColorMode} mb={4}>
//         Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
//       </Button>
//     </Flex>
//   )
// }

// export default App

// export default pp