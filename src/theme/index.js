import { extendTheme } from '@chakra-ui/react';
import { Container } from './components/container';

const theme = extendTheme({
    colors,
    ...typography,
    components: {
        Container,
        Button,
        Input,
    },
});

export default theme;
