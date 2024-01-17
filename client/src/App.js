import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://https://c-xkx8.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  return (
  <div className="App">
    <h1 style={{ textAlign: 'center' }}>Holle Foodu</h1>
    <h1>{message}</h1>
  </div>
  );
}

export default App;