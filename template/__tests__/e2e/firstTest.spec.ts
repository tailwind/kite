import { device, expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('SettingsScreen should be visible on the screen', async () => {
    await expect(element(by.text('SettingsScreen'))).toBeVisible();
  });
});
