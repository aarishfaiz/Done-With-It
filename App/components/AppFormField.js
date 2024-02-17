import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
export default function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched({ name })}
        onChangeText={handleChange({ name })}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visiable={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
