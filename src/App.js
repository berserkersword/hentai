import './App.css';
import axios from 'axios';
function App() {

  axios.get('https://wholesomelist.com/api/list').then(res => {
    console.log(res.data);
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
