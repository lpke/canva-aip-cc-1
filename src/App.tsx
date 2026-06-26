import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';

export function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}
