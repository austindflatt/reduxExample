import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddTask from './components/AddTask';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Container } from '@mantine/core';

function App() {
  return (
    <>
    <BrowserRouter>
    <Container>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-task' element={<AddTask />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App