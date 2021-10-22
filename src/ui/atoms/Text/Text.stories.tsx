import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text from './Text';
import { TextProps } from "./Text.styled";

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        borderRadius: {
            control: {
                type: 'select',
                options: [2, 4, 8],
            },
        },
    },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} >Hello world</Text>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'regular',
    // label: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'bold',
    // label: 'Text',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'medium',
    // label: 'Text',
};

export const Large = Template.bind({});
Large.args = {
    size: 'black',
    // label: 'Text',
};
