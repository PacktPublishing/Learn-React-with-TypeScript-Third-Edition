'use client';
import {
  useActionState,
  useOptimistic,
} from 'react';
import { completeContact } from '@/data/completeContact';

export function ContactItem({
  id,
  name,
  email,
  reason,
  notes,
  done,
}: {
  id: number;
  name: string;
  email: string;
  reason: string;
  notes: string;
  done: boolean;
}) {
  const [
    { ok, error, formData },
    formAction,
    isPending,
  ] = useActionState(completeContact, {
    ok: false,
    error: '',
    formData: new FormData(),
  });
  const [optimisticDone, setOptimisticDone] =
    useOptimistic(done);

  return (
    <div>
      <p
        style={{
          textDecoration: optimisticDone
            ? 'line-through'
            : 'none',
          opacity:
            !done && optimisticDone ? 0.5 : 1,
        }}
      >
        <b>{name}</b>, {email}, {reason}
      </p>
      {!optimisticDone && (
        <form
          action={(formData) => {
            setOptimisticDone(true);
            return formAction(formData);
          }}
        >
          <input
            type="hidden"
            name="id"
            value={id}
          />
          <div className="field">
            <textarea
              name="notes"
              placeholder="Notes"
              defaultValue={
                (notes ??
                  formData.get('notes') ??
                  '') as string
              }
            />
          </div>
          {!ok && (
            <p role="alert" className="error">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={isPending}
          >
            Done
          </button>
        </form>
      )}
    </div>
  );
}
