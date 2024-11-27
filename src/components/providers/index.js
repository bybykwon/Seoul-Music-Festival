'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// 선택사항: 테마 커스터마이징
const theme = extendTheme({
    // 여기에 테마 설정을 추가할 수 있습니다
});

export function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
