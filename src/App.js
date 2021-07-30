import logo from './logo.svg';
import Comments from './components/comments/Comments';
import Headding from './components/Headding/Headding';
import './App.css';

function App() {
  return (
    <div className="App">
      <Headding title = "Enter Your comments " />
      <Comments />
    </div>
  );
}

export default App;
