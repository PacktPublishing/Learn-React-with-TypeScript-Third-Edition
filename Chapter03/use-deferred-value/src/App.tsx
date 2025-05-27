import { useState, useDeferredValue, memo } from 'react';
import './App.css';
import { names } from './names';

function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search names..."
      />
      {query !== deferredQuery && <p>Loading...</p>}
      <List query={deferredQuery} />
    </div>
  );
}

const List = memo(function List({ query }: { query: string }) {
  const list = names.filter((name) => name.toLowerCase().includes(query.toLowerCase()));

  return (
    <ul>
      {list.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
});

export default App;
