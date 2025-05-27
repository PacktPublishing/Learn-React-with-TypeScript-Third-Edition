'use client';
import {
  useActionState,
  useRef,
  startTransition,
} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/data/schema';

import { insertContact } from '@/data/insertContact';

export function ContactForm() {
  const [
    { ok, error, errors, formData },
    formAction,
    isPending,
  ] = useActionState(insertContact, {
    ok: false,
    error: '',
    errors: {
      name: null,
      email: null,
      reason: null,
    },
    formData: new FormData(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors: clientErrors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      reason: '',
      notes: '',
      ...(Object.fromEntries(formData) ?? {}),
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  function onSubmit() {
    startTransition(() => {
      if (!formRef.current) {
        return;
      }
      formAction(new FormData(formRef.current));
    });
  }
  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          defaultValue={
            (formData.get('name') ?? '') as string
          }
          aria-invalid={
            (clientErrors.name ?? errors.name)
              ? 'true'
              : 'false'
          }
          aria-describedby="name-error"
          {...register('name')}
          aria-required="true"
        />
        <FieldError
          clientError={clientErrors.name}
          serverError={errors.name}
          errorId="name-error"
        />
      </div>
      <div className="field">
        <label htmlFor="email">
          Your email address
        </label>
        <input
          type="email"
          id="email"
          defaultValue={
            (formData.get('email') ??
              '') as string
          }
          aria-invalid={
            (clientErrors.email ?? errors.email)
              ? 'true'
              : 'false'
          }
          aria-describedby="email-error"
          {...register('email')}
          aria-required="true"
        />
        <FieldError
          clientError={clientErrors.email}
          serverError={errors.email}
          errorId="email-error"
        />
      </div>
      <div className="field">
        <label htmlFor="reason">
          Reason you need to contact us
        </label>
        <select
          id="reason"
          defaultValue={
            (formData.get('reason') ??
              '') as string
          }
          aria-invalid={
            (clientErrors.reason ?? errors.reason)
              ? 'true'
              : 'false'
          }
          aria-describedby="reason-error"
          {...register('reason')}
          aria-required="true"
        >
          <option value=""></option>
          <option value="Support">Support</option>
          <option value="Feedback">
            Feedback
          </option>
          <option value="Other">Other</option>
        </select>
        <FieldError
          clientError={clientErrors.reason}
          serverError={errors.reason}
          errorId="reason-error"
        />
      </div>
      <div className="field">
        <label htmlFor="notes">
          Additional notes
        </label>
        <textarea
          id="notes"
          defaultValue={
            (formData.get('notes') ??
              '') as string
          }
          {...register('notes')}
        />
      </div>
      {!ok && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
      {isPending && (
        <p role="alert">Saving ...</p>
      )}
      <button type="submit" disabled={isPending}>
        Submit
      </button>
    </form>
  );
}
type Err =
  | { message?: string }
  | undefined
  | null;
function FieldError({
  clientError,
  serverError,
  errorId,
}: {
  clientError: Err;
  serverError: Err;
  errorId: string;
}) {
  const error = clientError ?? serverError;
  if (!error) {
    return null;
  }
  return (
    <div id={errorId} role="alert">
      {error.message}
    </div>
  );
}
