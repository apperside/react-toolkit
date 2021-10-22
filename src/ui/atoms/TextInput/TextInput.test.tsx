import { render } from '@testing-library/react';
import React from 'react';
import withTheme from "src/hocs/withTheme";
import TextInput from './TextInput';

const ThemedTextInput = withTheme(TextInput);
describe('Text', () => {
    test('renders a default button with text', () => {
        const { baseElement } = render(<ThemedTextInput readOnly value="Hello world" />);

        // expect(screen.getByText('Hello world')).toBeInTheDocument();
        // expect(screen.getByText('Click me')).toHaveStyle({
        //     backgroundColor: '#025D92',
        //     color: 'white',
        // });
        expect(baseElement).toMatchSnapshot();
    });
    // test('renders a primary button', () => {
    //     const { baseElement } = render(<ThemedText variant="primary" label={'Click me'} />);

    //     expect(screen.getByText('Click me')).toHaveStyle({
    //         backgroundColor: '#025D92',
    //         color: 'white',
    //     });
    //     expect(baseElement).toMatchSnapshot();
    // });
    // test('handles onClick', () => {
    //     const mockOnClick = jest.fn();
    //     const { baseElement } = render(<ThemedText label={'Click Me'} onClick={mockOnClick} />);
    //     userEvent.click(screen.getByText('Click Me'));

    //     expect(mockOnClick).toHaveBeenCalledTimes(1);
    //     expect(baseElement).toMatchSnapshot();
    // });
});
