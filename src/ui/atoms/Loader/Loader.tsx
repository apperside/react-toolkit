import React, { CSSProperties } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { ColorKeys } from "styled-system";

type Props = { message?: any; color?: ColorKeys; style?: CSSProperties; loaderSize?: number; textSize?: number };
const LoaderContainer = styled.div<Pick<Props, "style">>(props => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	...props.style
}));
export class Loader extends React.Component<Props> {
	render() {
		return (
			<LoaderContainer style={this.props.style}>
				<ReactLoading
					type="spinningBubbles"
					color={this.props.color || "white"}
					height={this.props.loaderSize || 35}
					width={this.props.loaderSize || 35}
				/>
				{/* <div style={{ marginLeft: 20 }}
          className="loader-text">
          <Text variant="regular"
            fontSize={this.props.textSize || 36}
            color={this.props.color} >{this.props.message !== undefined ? this.props.message : "Caricamento"}</Text>
        </div> */}
			</LoaderContainer>
		);
	}
}
