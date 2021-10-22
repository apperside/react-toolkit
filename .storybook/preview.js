import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from '../src/ui/theme';
import darkTheme, { lightTheme, customTheme } from '../src/ui/theme';

const themes = [darkTheme, lightTheme, customTheme];
addDecorator(withThemesProvider([customTheme], ThemeProvider));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Docs', 'Getting Started', 'Components'],
        },
    },
};
