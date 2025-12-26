import { useContext } from "react";
import { CheckboxContext } from "./checkbox.context";

export const useCheckbox = () => {
	const ctx = useContext(CheckboxContext);

	if (!ctx) {
		throw new Error(
			"CheckboxContext must be used with in the Checkbox component.",
		);
	}

	return ctx;
};
