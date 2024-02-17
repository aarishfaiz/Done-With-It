import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../App/components/Screen";
import AppTextInput from "../App/components/AppTextInput";
import AppButton from "../App/components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../App/components/AppText";
import ErrorMessage from "../App/components/ErrorMessage";
import AppFormField from "../App/components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../App/assets/logo-red.png")}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              name="email"
              autoCapitalize="none"
              placeholder="email"
              autoCorrect={false}
              icon="lock"
              secureTextEntry
              textContentType="email"
            />

            <AppFormField
              name="password"
              autoCapitalize="none"
              placeholder="password"
              autoCorrect={false}
              icon="lock"
              secureTextEntry
              textContentType="password"
            />

            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
