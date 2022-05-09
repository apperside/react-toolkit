import React from 'react';
import { baseTheme, ThemeProvider } from '../ui/theme';

export function withTheme<P>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    const ComponentWithTheme = (props: P) => {
        return (
            <ThemeProvider theme={baseTheme as any}>
                <WrappedComponent {...props} />
            </ThemeProvider>
        );
    };
    return ComponentWithTheme;
}
export default withTheme;
