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
export declare type DonationInputValues = {
    Donation?: number;
};
export declare type DonationValidationValues = {
    Donation?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationOverridesProps = {
    DonationGrid?: PrimitiveOverrideProps<GridProps>;
    Donation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationProps = React.PropsWithChildren<{
    overrides?: DonationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DonationInputValues) => DonationInputValues;
    onSuccess?: (fields: DonationInputValues) => void;
    onError?: (fields: DonationInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationInputValues) => DonationInputValues;
    onValidate?: DonationValidationValues;
} & React.CSSProperties>;
export default function Donation(props: DonationProps): React.ReactElement;
