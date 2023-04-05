/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Donation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateDonation(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    donatorName: "",
    donationAmount: "",
    sub: "",
  };
  const [donatorName, setDonatorName] = React.useState(
    initialValues.donatorName
  );
  const [donationAmount, setDonationAmount] = React.useState(
    initialValues.donationAmount
  );
  const [sub, setSub] = React.useState(initialValues.sub);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDonatorName(initialValues.donatorName);
    setDonationAmount(initialValues.donationAmount);
    setSub(initialValues.sub);
    setErrors({});
  };
  const validations = {
    donatorName: [{ type: "Required" }],
    donationAmount: [{ type: "Required" }],
    sub: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          donatorName,
          donationAmount,
          sub,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Donation(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreateDonation")}
      {...rest}
    >
      <TextField
        label="Donator name"
        isRequired={true}
        isReadOnly={false}
        value={donatorName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              donatorName: value,
              donationAmount,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.donatorName ?? value;
          }
          if (errors.donatorName?.hasError) {
            runValidationTasks("donatorName", value);
          }
          setDonatorName(value);
        }}
        onBlur={() => runValidationTasks("donatorName", donatorName)}
        errorMessage={errors.donatorName?.errorMessage}
        hasError={errors.donatorName?.hasError}
        {...getOverrideProps(overrides, "donatorName")}
      ></TextField>
      <TextField
        label="Donation amount"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={donationAmount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              donatorName,
              donationAmount: value,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.donationAmount ?? value;
          }
          if (errors.donationAmount?.hasError) {
            runValidationTasks("donationAmount", value);
          }
          setDonationAmount(value);
        }}
        onBlur={() => runValidationTasks("donationAmount", donationAmount)}
        errorMessage={errors.donationAmount?.errorMessage}
        hasError={errors.donationAmount?.hasError}
        {...getOverrideProps(overrides, "donationAmount")}
      ></TextField>
      <TextField
        label="Sub"
        isRequired={true}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              donatorName,
              donationAmount,
              sub: value,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
