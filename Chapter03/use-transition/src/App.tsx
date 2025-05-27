import { useState, useTransition } from 'react';
import './App.css';
import { names } from './names';

function App() {
  const [query, setQuery] = useState('');
  const [list, setList] = useState(names);
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);

          startTransition(() => {
            setList(
              names.filter((name) => name.toLowerCase().includes(e.target.value.toLowerCase())),
            );
          });
        }}
        placeholder="Search names..."
      />

      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
