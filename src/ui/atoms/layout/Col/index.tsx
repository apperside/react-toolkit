import React from 'react';
import { BoxProps } from '../Box/Box';
import { Col } from './Col';

export type ColProps = BoxProps;

/**
 * A Col with flex, with default orientation
 * (row on web, column on mobile)
 */
const FlexCol: React.FC<ColProps> = (props) => <Col flexDirection="row" {...props} />;

/**
 * A Col with flex and forced horizontal orientation
 */
const HCol: React.FC<ColProps> = (props) => <FlexCol flexDirection="row" {...props} />;

/**
 * A Col with flex and forced vertical orientation
 */
const VCol: React.FC<ColProps> = (props) => <FlexCol flexDirection="column" {...props} />;

export { Col, FlexCol, HCol, VCol };
