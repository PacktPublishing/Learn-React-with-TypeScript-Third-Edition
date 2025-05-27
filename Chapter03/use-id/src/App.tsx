import { Field } from './Field';
import './App.css';
function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(Object.fromEntries(formData));
      }}
    >
      <Field label="Name" name="name" />
      <Field label="Email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
