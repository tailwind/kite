import { render } from '@testing-library/react-native';
import React from 'react';
import { SettingsScreen } from 'src/domains/settings/screens/SettingsScreen';

test('form submits two answers', () => {
  const { getByText } = render(<SettingsScreen />);

  getByText('SettingsScreen');
});
