import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to={'/'}>Home</Link> <Link to={'room'}>Room</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Home = () => {
  const login = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    console.log(await result.json());
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />{' '}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

const Room = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('/api/rooms');

      const data = await response.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <h1>Room</h1>
      <ul>
        {rooms && rooms.map((room) => <li key={room._id}>{room.name}</li>)}
      </ul>
    </>
  );
};

export default App;
