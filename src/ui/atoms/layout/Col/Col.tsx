import styled from 'styled-components';
import { Box } from '../Box';

/**
 * A Col is a Box with default boxSizing property,
 * used to avoid grid breaking because of borders
 */
export const Col = styled(Box)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column'
});
