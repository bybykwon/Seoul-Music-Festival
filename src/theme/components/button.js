export const Button = {
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 2,
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 3,
        },
    },
    variants: {
        outline: {
            bg: 'blue.500',
            color: 'white',
            _hover: {
                bg: 'blue.600',
            },
        },
        ghost: {
            bg: 'gray.200',
            color: 'gray.800',
            _hover: {
                bg: 'gray.300',
            },
        },
    },
    defaultProps: {
        size: 'md',
        variant: 'primary',
    },
};
