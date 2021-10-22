import styled from 'styled-components';
import { GridProps } from '.';
import { Box } from '../Box';

/**
 * A Box with default boxSizing property,
 * useful for grids
 */
export const Grid = styled(Box)<GridProps>({
    boxSizing: 'border-box',
});
