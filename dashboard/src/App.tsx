import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/widget">Widget</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
