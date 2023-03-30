/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Donations } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DonationsUpdateFormInputValues = {
    Donation?: number;
};
export declare type DonationsUpdateFormValidationValues = {
    Donation?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationsUpdateFormOverridesProps = {
    DonationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Donation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: DonationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    donations?: Donations;
    onSubmit?: (fields: DonationsUpdateFormInputValues) => DonationsUpdateFormInputValues;
    onSuccess?: (fields: DonationsUpdateFormInputValues) => void;
    onError?: (fields: DonationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationsUpdateFormInputValues) => DonationsUpdateFormInputValues;
    onValidate?: DonationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DonationsUpdateForm(props: DonationsUpdateFormProps): React.ReactElement;
