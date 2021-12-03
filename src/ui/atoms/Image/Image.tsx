import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { size } from "styled-system";
import {
  background, border, color, flexbox,
  layout, margin, position, space
} from "styled-system";
import { ImageProps } from ".";


export const Image = styled.img.withConfig<ImageProps>({
  shouldForwardProp: (prop: string) => ["onLayout"].indexOf(prop) >= 0 || shouldForwardProp(prop)
}) <ImageProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${space}
    ${margin}
    ${size}
    ${color}
    ${background}
    ${position}
`;


// export const Image: React.FC<Omit<PropsOf<typeof ImageComponent>, "width" | "height"> & { width: WidthProps, height: HeightProps }> = (props) => {
//   //@ts-ignore
//   return <ImageComponent {...props} />;
// };