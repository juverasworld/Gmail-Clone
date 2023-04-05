import {
    Stack,
    Flex,
    Button,
    Link,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/img/logo.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             Welcome to Vera's portfolio website. i am really glad to have you.
             sign up if you haven't already
            </Text>
            <Stack direction={'row'}>
              < Link
               href="/create">
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
               CREATE ACCOUNT
              </Button>
              </Link>
              <Link
              href="/Form">
              <Button
                bg={'whiteAlpha.300'}
                
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                SIGN IN 
              </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }