/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Fundraisers } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FundraisersCreateForm(props) {
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
    Name: "",
    Description: "",
    Goal: "",
    EndDate: "",
    User: "",
    userID: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Goal, setGoal] = React.useState(initialValues.Goal);
  const [EndDate, setEndDate] = React.useState(initialValues.EndDate);
  const [User, setUser] = React.useState(initialValues.User);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setDescription(initialValues.Description);
    setGoal(initialValues.Goal);
    setEndDate(initialValues.EndDate);
    setUser(initialValues.User);
    setUserID(initialValues.userID);
    setErrors({});
  };
  const validations = {
    Name: [{ type: "Required" }],
    Description: [{ type: "Required" }],
    Goal: [{ type: "Required" }],
    EndDate: [{ type: "Required" }],
    User: [{ type: "Required" }],
    userID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          Name,
          Description,
          Goal,
          EndDate,
          User,
          userID,
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
          await DataStore.save(new Fundraisers(modelFields));
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
      {...getOverrideProps(overrides, "FundraisersCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Description,
              Goal,
              EndDate,
              User,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Description: value,
              Goal,
              EndDate,
              User,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Goal"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Goal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Goal: value,
              EndDate,
              User,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.Goal ?? value;
          }
          if (errors.Goal?.hasError) {
            runValidationTasks("Goal", value);
          }
          setGoal(value);
        }}
        onBlur={() => runValidationTasks("Goal", Goal)}
        errorMessage={errors.Goal?.errorMessage}
        hasError={errors.Goal?.hasError}
        {...getOverrideProps(overrides, "Goal")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={EndDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Goal,
              EndDate: value,
              User,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.EndDate ?? value;
          }
          if (errors.EndDate?.hasError) {
            runValidationTasks("EndDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("EndDate", EndDate)}
        errorMessage={errors.EndDate?.errorMessage}
        hasError={errors.EndDate?.hasError}
        {...getOverrideProps(overrides, "EndDate")}
      ></TextField>
      <TextField
        label="User"
        isRequired={true}
        isReadOnly={false}
        value={User}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Goal,
              EndDate,
              User: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.User ?? value;
          }
          if (errors.User?.hasError) {
            runValidationTasks("User", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("User", User)}
        errorMessage={errors.User?.errorMessage}
        hasError={errors.User?.hasError}
        {...getOverrideProps(overrides, "User")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Goal,
              EndDate,
              User,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
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
