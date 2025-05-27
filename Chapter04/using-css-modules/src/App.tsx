import { Alert } from './Alert';
import './App.css';

function App() {
  return (
    <div className="container">
      <Alert heading="Success" closable>
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App;
