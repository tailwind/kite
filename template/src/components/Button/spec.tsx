/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Button } from 'src/components/Button';
import { theme } from 'src/theme';

test('Renders the button with the testID', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button testID="testID">Test</Button>
    </ThemeProvider>,
  );

  getByTestId('testID');
});
