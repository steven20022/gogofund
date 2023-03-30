/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FundraisersCreateFormInputValues = {
    Name?: string;
    Description?: string;
    Goal?: number;
    EndDate?: string;
    User?: string;
    userID?: string;
};
export declare type FundraisersCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Goal?: ValidationFunction<number>;
    EndDate?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FundraisersCreateFormOverridesProps = {
    FundraisersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Goal?: PrimitiveOverrideProps<TextFieldProps>;
    EndDate?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FundraisersCreateFormProps = React.PropsWithChildren<{
    overrides?: FundraisersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FundraisersCreateFormInputValues) => FundraisersCreateFormInputValues;
    onSuccess?: (fields: FundraisersCreateFormInputValues) => void;
    onError?: (fields: FundraisersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FundraisersCreateFormInputValues) => FundraisersCreateFormInputValues;
    onValidate?: FundraisersCreateFormValidationValues;
} & React.CSSProperties>;
export default function FundraisersCreateForm(props: FundraisersCreateFormProps): React.ReactElement;
