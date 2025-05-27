'use client';
import { useRouter } from 'next/navigation';
import { Contact } from '@/data/schema';

export function ContactForm() {
  const { push } = useRouter();
  async function handleAction(
    formData: FormData,
  ) {
    const contact = Object.fromEntries(
      formData,
    ) as Contact;
    const response = await fetch('api', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      console.error('Something went wrong');
      return;
    }
    push(
      '/thanks/?name=' +
        encodeURIComponent(contact.name),
    );
  }
  return (
    <form action={handleAction}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="field">
        <label htmlFor="email">
          Your email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div className="field">
        <label htmlFor="reason">
          Reason you need to contact us
        </label>
        <select id="reason" name="reason">
          <option value=""></option>
          <option value="Support">Support</option>
          <option value="Feedback">
            Feedback
          </option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="notes">
          Additional notes
        </label>
        <textarea id="notes" name="notes" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
