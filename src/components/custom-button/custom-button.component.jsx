import React from "react";

// import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";
import { Button } from "@material-ui/core";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		// <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
		<Button {...otherProps} variant="outlined">
			{children}
		</Button>
	);
};

export default CustomButton;
