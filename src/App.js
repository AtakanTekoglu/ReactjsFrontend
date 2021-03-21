import Navbar from './components/Navbar'
import Container from './components/Container';
import './App.css';
function App() {
  return (
    <div className="bg">
      <div className="nav">
        <Navbar></Navbar>
      </div>
      <div className="my-container">
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
