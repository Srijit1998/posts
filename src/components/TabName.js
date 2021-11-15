import React from 'react';
import { Tab  } from '@chakra-ui/react';


const TabName = ({ id, username, fetchUserPosts }) => {
    return ( 
        <Tab onClick={() => fetchUserPosts(id)}>{username}</Tab>  
    );
}

export default TabName;
