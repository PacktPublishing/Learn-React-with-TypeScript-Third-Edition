'use client';
import { insertContact } from '@/data/insertContact';

export function ContactForm() {
  return (
    <form action={insertContact}>
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
