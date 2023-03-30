/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Fundraisers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FundraisersUpdateFormInputValues = {
    Name?: string;
    Description?: string;
    Goal?: number;
    EndDate?: string;
    User?: string;
    userID?: string;
};
export declare type FundraisersUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Goal?: ValidationFunction<number>;
    EndDate?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FundraisersUpdateFormOverridesProps = {
    FundraisersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Goal?: PrimitiveOverrideProps<TextFieldProps>;
    EndDate?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FundraisersUpdateFormProps = React.PropsWithChildren<{
    overrides?: FundraisersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fundraisers?: Fundraisers;
    onSubmit?: (fields: FundraisersUpdateFormInputValues) => FundraisersUpdateFormInputValues;
    onSuccess?: (fields: FundraisersUpdateFormInputValues) => void;
    onError?: (fields: FundraisersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FundraisersUpdateFormInputValues) => FundraisersUpdateFormInputValues;
    onValidate?: FundraisersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FundraisersUpdateForm(props: FundraisersUpdateFormProps): React.ReactElement;
