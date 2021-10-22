/* eslint-disable max-len */
import { BoxProps } from '../Box/Box';
import { Grid } from './Grid';

export type GridProps = BoxProps;

Grid.defaultProps = {
    flexWrap: 'wrap',
    display: 'flex',
    width: 1,
    flexDirection: 'column',
};

export { Grid };
