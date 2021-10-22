import styled from 'styled-components';
import { ColProps } from '.';
import { Box } from '../Box';

/**
 * A Col is a Box with default boxSizing property,
 * used to avoid grid breaking because of borders
 */
export const Col = styled(Box)<ColProps>({
  boxSizing: 'border-box',
});
