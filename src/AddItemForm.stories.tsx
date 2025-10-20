import React from 'react';
import { AddItemForm } from './AddItemForm';
import { action } from '@storybook/addon-actions/preview';

export default {
  title: 'AddItemForm Component',
  component: AddItemForm,
};

export const Default = () => <AddItemForm addItem={action('Add item clicked')} />;