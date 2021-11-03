import styled from 'styled-components';
import { Box } from '../Box';

/**
 * A Box with default boxSizing property,
 * useful for grids
 */
export const Grid = styled(Box)({
    boxSizing: 'border-box',
});
