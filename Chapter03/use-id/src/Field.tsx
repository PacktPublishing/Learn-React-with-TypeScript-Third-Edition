import { useId } from 'react';

export function Field({ label, name }: { label: string; name: string }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="text" />
    </div>
  );
}
