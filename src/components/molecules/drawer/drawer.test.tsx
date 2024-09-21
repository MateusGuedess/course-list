import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Drawer from './drawer.component';

describe('Drawer Component', () => {
  it('renders the drawer when isOpen is true', () => {
    render(
      <ChakraProvider>
        <Drawer isOpen={true} onClose={jest.fn()} />
      </ChakraProvider>
    );

    // Check if the drawer content is rendered
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
  });
});
