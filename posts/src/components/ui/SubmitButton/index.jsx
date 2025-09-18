import React from "react";
import { Button } from "./styles";

export const SubmitButton = ({ isSubmitting, disabled, children }) => {
    return (
        <Button type="submit" disabled={disabled || isSubmitting}>
            {children}
        </Button>
    );  
};
