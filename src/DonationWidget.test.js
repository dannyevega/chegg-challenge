import React from 'react';
import renderer from 'react-test-renderer';
import DonationWidget from './DonationWidget';
import { shallow, mount, render } from 'enzyme';

describe("DonationWidget", () => {
  let props;
  let mountedDonationWidget;
  const donationWidget = () => {
    if (!mountedDonationWidget) {
      mountedDonationWidget = mount(
        <DonationWidget {...props} />
      );
    }
    return mountedDonationWidget;
  }

  beforeEach(() => {
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    };
    mountedDonationWidget = undefined;
  });
  
  it("always renders a div", () => {
    const divs = donationWidget().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });  
});