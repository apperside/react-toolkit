import {
  BackgroundProps, BorderProps, ColorProps, FlexboxProps,
  LayoutProps, MarginProps, PositionProps, SpaceProps
} from "styled-system";
import { Image } from "./Image";


/**
 * Box is the basic building block.
 * It abstracts a div on web and a View on mobile
 */
export type ImageProps = LayoutProps
  & FlexboxProps
  & BorderProps
  & SpaceProps
  & MarginProps
  & ColorProps
  & BackgroundProps
  & PositionProps

export { Image };
