import { Checklist } from './Checklist';

function App() {
  return (
    <div>
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
        ]}
        id="id"
        primary="name"
        secondary="role"
      />
    </div>
  );
}

export default App;
