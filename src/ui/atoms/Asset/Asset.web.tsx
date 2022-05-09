import React, { useMemo } from "react";
import { PropsOf } from "src/typeUtils";
import { AppImages } from ".";
import { Image } from "../Image"
import { icons } from "."
type Props = {
  name?: keyof AppImages;
  size?: number
  fakeImage?: { w: number, h: number }
  source?: any
  aspectRatio?: number
  onPress?: () => void
  base64EncodedImage?: { mime: string, encoded: string }
  ref?: any
}


const AssetComponent: React.FC<Props & PropsOf<typeof Image>> = ({
  name,
  size,
  fakeImage,
  source,
  aspectRatio,
  onPress,
  base64EncodedImage,
  ref,
  ...props
}) => {

  const finalSource = useMemo(() => {
    if (fakeImage) {
      const { w, h } = fakeImage;

      if (!h) {
        console.warn("missing fake image height");
      }
      if (!w) {
        console.warn("missing fake image width");
      }

      return `https://unsplash.it/${w || 100}/${h || 100}`;
    } else if (name) {
      return icons[name as any];
    }

    // console.warn("the image is", base64EncodedImage)
    if (base64EncodedImage?.encoded) {
      return `data:${base64EncodedImage?.mime};base64,${base64EncodedImage?.encoded}`;
    }

    return source;
  }, [base64EncodedImage, fakeImage, name, source]);

  return (
    //@ts-ignore
    <Image src={finalSource}
      height={10}
      alt=""
      {...props}>
      {props.children}
    </Image >
  );
};


export const Asset = React.memo(AssetComponent);


