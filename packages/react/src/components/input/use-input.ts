import { useContext } from "react";

import { InputContext } from "./input.context";

export const useInput = () => {
	const context = useContext(InputContext);

	if (!context) {
		throw new Error("useInput must be used within a InputProvider");
	}

	return context;
};
