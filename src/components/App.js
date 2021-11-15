import React from 'react';
import { Container } from '@chakra-ui/react';
import Home from './Home';

const App = () => {
    return (
        <Container maxW='container.xl' p={10}>
            <Home />
        </Container>
    );
}

export default App;
