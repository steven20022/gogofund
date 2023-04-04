/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Fundraiser } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FundraiserUpdateFormInputValues = {
    title?: string;
    description?: string;
    endDate?: string;
    fundGoal?: number;
    sub?: string;
};
export declare type FundraiserUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    fundGoal?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FundraiserUpdateFormOverridesProps = {
    FundraiserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    fundGoal?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FundraiserUpdateFormProps = React.PropsWithChildren<{
    overrides?: FundraiserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fundraiser?: Fundraiser;
    onSubmit?: (fields: FundraiserUpdateFormInputValues) => FundraiserUpdateFormInputValues;
    onSuccess?: (fields: FundraiserUpdateFormInputValues) => void;
    onError?: (fields: FundraiserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FundraiserUpdateFormInputValues) => FundraiserUpdateFormInputValues;
    onValidate?: FundraiserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FundraiserUpdateForm(props: FundraiserUpdateFormProps): React.ReactElement;
