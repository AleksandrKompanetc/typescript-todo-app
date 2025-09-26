type EditableSpanPropsType = {
  title: string;
  editMode: true;
}

export function EditableSpan(props: EditableSpanPropsType) {
  return <span>{props.title}</span>
}