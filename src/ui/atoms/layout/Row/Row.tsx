/* eslint-disable max-len */
import styled from 'styled-components';
import { RowProps } from '.';
import { Box } from '../Box';

export const Row = styled(Box)<RowProps>({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row'
});
