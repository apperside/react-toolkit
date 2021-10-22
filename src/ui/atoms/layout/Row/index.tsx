import { BoxProps } from '../Box/Box';
import { Row } from './Row';

export type RowProps = BoxProps;

Row.defaultProps = {
    display: 'flex',
    flexDirection: 'row',
    width: 1,
    flexWrap: 'wrap',
};

export { Row };
