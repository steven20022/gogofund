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
export declare type CreateDonationInputValues = {
    donatorName?: string;
    donationAmount?: number;
    sub?: string;
};
export declare type CreateDonationValidationValues = {
    donatorName?: ValidationFunction<string>;
    donationAmount?: ValidationFunction<number>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateDonationOverridesProps = {
    CreateDonationGrid?: PrimitiveOverrideProps<GridProps>;
    donatorName?: PrimitiveOverrideProps<TextFieldProps>;
    donationAmount?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateDonationProps = React.PropsWithChildren<{
    overrides?: CreateDonationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateDonationInputValues) => CreateDonationInputValues;
    onSuccess?: (fields: CreateDonationInputValues) => void;
    onError?: (fields: CreateDonationInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateDonationInputValues) => CreateDonationInputValues;
    onValidate?: CreateDonationValidationValues;
} & React.CSSProperties>;
export default function CreateDonation(props: CreateDonationProps): React.ReactElement;
