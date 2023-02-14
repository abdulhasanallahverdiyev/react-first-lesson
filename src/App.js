import './App.css';

function App() {
  return (
    <div className="App">
   
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>
      {
        process.env.NODE_ENV === 'production' && (
          <div>
            <h1>Salam Menim adim Abdulhasan di</h1>
          </div>
        )
      }
    </div>
  );
}

export default App;
