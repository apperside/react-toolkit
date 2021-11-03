import shouldForwardProp from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { borderRadius, padding } from "styled-system";
import { WidthProps } from "styled-system";
import { BackgroundImageProps } from "styled-system";
import { LayoutProps, FlexboxProps, BorderProps, SpaceProps, MarginProps, ColorProps, BackgroundProps, PositionProps } from "styled-system";
import { background, border, color, flexbox, layout, margin, position, space } from 'styled-system';


/**
 * Box is the basic building block.
 * It abstracts a div on web and a View on mobile
 */
export type BoxProps =
    & SpaceProps
    & WidthProps
    & ColorProps
    & BackgroundImageProps
    & BackgroundProps
    & LayoutProps
    & FlexboxProps
    & BorderProps
    & FlexboxProps

export const Box = styled.div.withConfig<BoxProps>({
    shouldForwardProp: (prop: string) => ['onLayout'].indexOf(prop) >= 0 || shouldForwardProp(prop),
})<BoxProps>(
    borderRadius,
    color,
    space,
    color,
    space,
    layout,
    padding,
    flexbox,
    background,
    border,
    position,


);

/**
* A Box with flex and forced horizontal orientation.
*/
// const HBox: React.FC<PropsOf<typeof Box>> = (props) => <Box display="flex" flexDirection="row" {...props} />;
export const HBox = styled(Box)`
 display:flex;
 flex-direction:row;
`;

export const VBox = styled(Box)`
 display:flex;
 flex-direction:column;
`;

