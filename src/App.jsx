import './App.css';

function App() {
  let nam = prompt("what is your name??")
  let date = new Date()
  let day = date.getDate()
  let r = Math.random()
  let b = prompt("background color is...")
  const style = {
    backgroundColor: b,
    minHeight: "100vh",
  }
  return (
    <div className='body' style={style}>
      <div className="card">
        <h1>My name is: {nam}</h1>
        <h1>{day}</h1>
        <h1>{r}</h1>
        <h1>salom</h1>
      </div>
    </div>
  );
}

export default App;
