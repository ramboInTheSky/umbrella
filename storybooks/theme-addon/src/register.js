import * as React from 'react';
import addons from '@storybook/addons';

import ThemePanel from './manager/ThemePanel';

const ADDON_ID = 'umbrella-addon-theme';
const PANEL_ID = `${ADDON_ID}/theme-panel`;

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Themes',
    render: () => <ThemePanel channel={channel} api={api} />,
  });
});
