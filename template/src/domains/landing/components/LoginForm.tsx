import { ThemeOverride } from '@emotion/react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import React, { FC, useRef } from 'react';
import { TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { PasswordInput } from 'src/components/PasswordInput';
import { Text } from 'src/components/Text';
import { AppDispatch } from 'src/state';
import { login } from 'src/state/authSlice';
import * as Yup from 'yup';

const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const ERROR_CONTAINER: ViewStyle = {
  marginTop: -10,
};

export const ERROR_TEXT: ThemeOverride<TextStyle> = {
  color: 'red.600',
};

export const LoginForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const passwordInputRef = useRef<TextInput>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      meta: undefined,
    },
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: async ({ email, password }) => {
      passwordInputRef?.current?.blur();

      return dispatch(login({ email, password }))
        .then(unwrapResult)
        .then(() => {})
        .catch(error => {
          formik.setFieldError('meta', error.message);
        });
    },
  });

  return (
    <>
      <Input
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        isInvalid={formik.touched.email && !!formik.errors.email}
        label="Email"
        variant="landing"
        onSubmitEditing={() => {
          passwordInputRef?.current?.focus();
        }}
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        keyboardType="email-address"
        enablesReturnKeyAutomatically
        textContentType="emailAddress"
        returnKeyType="next"
      />
      {formik.touched.email && formik.errors.email && (
        <View style={ERROR_CONTAINER}>
          <Text textStyle={ERROR_TEXT}>{formik.errors.email}</Text>
        </View>
      )}
      <PasswordInput
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        isInvalid={formik.touched.password && !!formik.errors.password}
        label="Password"
        variant="landing"
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
        blurOnSubmit={false}
        onSubmitEditing={formik.submitForm}
        forwardedRef={passwordInputRef}
        enablesReturnKeyAutomatically
        textContentType="password"
        returnKeyType="done"
      />
      {formik.touched.password && formik.errors.password && (
        <View style={ERROR_CONTAINER}>
          <Text textStyle={ERROR_TEXT}>{formik.errors.password}</Text>
        </View>
      )}
      {formik.touched.meta && formik.errors.meta && (
        <View style={ERROR_CONTAINER}>
          <Text textStyle={ERROR_TEXT}>{formik.errors.meta}</Text>
        </View>
      )}
      <Button
        loading={formik.isSubmitting}
        size="md"
        rounded="md"
        buttonStyle={{ width: '100%', marginVertical: 10 }}
        onPress={formik.submitForm}>
        Log In
      </Button>
    </>
  );
};
