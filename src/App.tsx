import React from 'react';

const App: React.FC = () => {
  const currentUrl = window.location.href;

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Current URL</h1>
      <p>{currentUrl}</p>
    </div>
  );
}

export default App;
