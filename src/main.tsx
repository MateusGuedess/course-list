import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from './pages/home.tsx';
import Root from './routes/root.tsx';

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }

  const theme = extendTheme({ colors })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
            path: "/home",
            element: <Home />,
        },
      ]
    },

  ]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <Flex minHeight="100vh" minWidth="100vw" direction="column">
            <RouterProvider router={router} />
        </Flex>
    </ChakraProvider>
  </StrictMode>,
)
