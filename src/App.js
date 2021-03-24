import './App.css';
import Picture from './Picture';
import Topbar from './Topbar';

function App() {
  return (
    <div className="app">
      <h1 className="app__heading">NASA Media Search</h1>
      <Topbar />
      <Picture />
    </div>
  );
}

export default App;
