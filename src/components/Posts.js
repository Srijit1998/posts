import React from 'react';
import { ListItem, ListIcon, Heading, Text } from '@chakra-ui/react';
import { MdVerifiedUser } from 'react-icons/md';

const Posts = ({ title, desc }) => {
    return (
        <ListItem 
            bgColor='gray.200' 
            p={5} 
            boxShadow='0 2px 3px rgba(0, 0, 0, 0.3)'
            transition='500ms'
            _hover={{ transform: 'scale(1.05, 1.05)' }}
        >
            <ListIcon as={MdVerifiedUser} color="teal.500" />
            <Heading as='span' color='gray.600' size='md' isTruncated>
                {title}
            </Heading>
            <Text ml={10} size='md' color='teal.500'>
                {desc}
            </Text>
        </ListItem>
    );
}

export default Posts
