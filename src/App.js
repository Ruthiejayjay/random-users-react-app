import Users from './Components/Users';
import User from './Components/User';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/user' element={<User />} />
    </Routes>
  );
}

export default App;
