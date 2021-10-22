import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextInput from './TextInput';
import { TextInputProps } from "./TextInput.styled";

export default {
    title: 'Components/TextInput',
    component: TextInput,
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

const Template: Story<TextInputProps> = (args) => <TextInput {...args} >Hello world</TextInput>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    // label: 'TextInput',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    // label: 'TextInput',
};
