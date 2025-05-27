import { Checklist } from './Checklist';

function App() {
  return (
    <div>
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 3, name: 'Bill', role: 'Developer' },
          { id: 4, name: 'Tara', role: 'Developer' },
          { id: 5, name: 'Sara', role: 'UX' },
          { id: 6, name: 'Derik', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
        renderItem={(item) => (
          <li key={item.id}>
            <div className="primary">
              {item.name}, <small style={{ textTransform: 'uppercase' }}>{item.role}</small>
            </div>
          </li>
        )}
      />
    </div>
  );
}

export default App;
