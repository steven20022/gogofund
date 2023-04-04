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
export declare type FundraiserCreateFormInputValues = {
    title?: string;
    description?: string;
    endDate?: string;
    fundGoal?: number;
    sub?: string;
};
export declare type FundraiserCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    fundGoal?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FundraiserCreateFormOverridesProps = {
    FundraiserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    fundGoal?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FundraiserCreateFormProps = React.PropsWithChildren<{
    overrides?: FundraiserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FundraiserCreateFormInputValues) => FundraiserCreateFormInputValues;
    onSuccess?: (fields: FundraiserCreateFormInputValues) => void;
    onError?: (fields: FundraiserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FundraiserCreateFormInputValues) => FundraiserCreateFormInputValues;
    onValidate?: FundraiserCreateFormValidationValues;
} & React.CSSProperties>;
export default function FundraiserCreateForm(props: FundraiserCreateFormProps): React.ReactElement;
