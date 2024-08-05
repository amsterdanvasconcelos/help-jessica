const App = () => {
  const login = async () => {
    const result = await fetch('https://booking-room-backend.vercel.app/');
    console.log(result);
  };

  return (
    <>
      <h1>HELP JESSICA</h1>
      <button onClick={login}>Login</button> <button>Register</button>
    </>
  );
};

export default App;
