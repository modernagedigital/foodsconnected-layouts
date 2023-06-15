import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Breadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumb> = (args) => <div className='h-5'><Breadcrumb {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  primary: true,
  label: 'Button',
};