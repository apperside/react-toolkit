import { render, screen } from '@testing-library/react';
import React from 'react';
import withTheme from "src/hocs/withTheme";
import Text from './Text';

const ThemedText = withTheme(Text);
describe('Text', () => {
    test('renders a default text', () => {
        const { baseElement } = render(<ThemedText >Hello world</ThemedText>);

        expect(screen.getByText('Hello world')).toBeInTheDocument();
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
