/* eslint-disable no-undef */
import {expect} from 'detox';
import {element} from 'detox';
import {device, by} from 'detox';

describe('TestApp', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Should have VodQA title', async () => {
    await expect(element(by.id('app-title'))).toBeVisible();
  });

  it('Should press on the radio button', async () => {
    await element(by.text('Yes')).tap();
  });

  it('Should be able to fill text input', async () => {
    await element(by.id('input')).typeText('Good Sessions');
  });

  it('Should press on the check box', async () => {
    await element(by.id('checkbox')).tap();
  });

  it('Should press on the submit button', async () => {
    await element(by.id('button')).tap();
  });

  it('should display a alert with success message', async () => {
    await expect(
      element(by.text('Response Submitted Successfully')).atIndex(0),
    ).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
