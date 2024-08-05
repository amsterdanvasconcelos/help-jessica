const App = () => {
  const login = async () => {
    const result = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'jessica@email.com',
        password: '123456',
      }),
    });

    console.log(await result.json());
  };

  return (
    <>
      <h1>HELP JESSICA</h1>
      <button onClick={login}>Login</button> <button>Register</button>
    </>
  );
};

export default App;
