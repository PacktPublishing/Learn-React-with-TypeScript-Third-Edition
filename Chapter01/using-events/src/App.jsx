import { Alert } from './Alert';

function App() {
  return (
    <Alert type="information" heading="Success" closable onClose={() => console.log('closed')}>
      Everything is really good!
    </Alert>
  );
}

export default App;
