import { useContext } from "react";
import { FieldContext } from "./field.context";

export const useField = () => {
	const ctx = useContext(FieldContext);

	if (!ctx) {
		throw new Error("FieldContext must be used with in the Field component.");
	}

	return ctx;
};
