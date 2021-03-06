import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { LayoutProps, FlexboxProps, BorderProps, SpaceProps, MarginProps, ColorProps, BackgroundProps, PositionProps } from "styled-system";
import { background, border, color, flexbox, layout, margin, position, space } from "styled-system";


/**
 * Box is the basic building block.
 * It abstracts a div on web and a View on mobile
 */
export type BoxProps = LayoutProps &
    FlexboxProps &
    BorderProps &
    SpaceProps &
    MarginProps &
    ColorProps &
    BackgroundProps &
    PositionProps;

export const Box = styled.div.withConfig<BoxProps>({
    shouldForwardProp: (prop: string) => ["onLayout"].indexOf(prop) >= 0 || shouldForwardProp(prop),
}) <BoxProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${space}
    ${margin}
    ${color}
    ${background}
    ${position}
    box-sizing:border-box;
`;


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

