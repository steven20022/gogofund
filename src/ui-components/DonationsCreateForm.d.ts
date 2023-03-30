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
export declare type DonationsCreateFormInputValues = {
    Donation?: number;
};
export declare type DonationsCreateFormValidationValues = {
    Donation?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationsCreateFormOverridesProps = {
    DonationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Donation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationsCreateFormProps = React.PropsWithChildren<{
    overrides?: DonationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DonationsCreateFormInputValues) => DonationsCreateFormInputValues;
    onSuccess?: (fields: DonationsCreateFormInputValues) => void;
    onError?: (fields: DonationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationsCreateFormInputValues) => DonationsCreateFormInputValues;
    onValidate?: DonationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function DonationsCreateForm(props: DonationsCreateFormProps): React.ReactElement;
