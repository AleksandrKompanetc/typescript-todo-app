import { AddItemForm } from './AddItemForm';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'AddItemForm Component',
  component: AddItemForm
}

const callback = (title: string) => {
  alert(title);
};

export const AddItemFormBaseExample = (props: any) => {
  return <AddItemForm addItem={callback} />
}