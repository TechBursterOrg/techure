import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import { Home, ServicesPage, AboutPage, WorkPage, FaqPage, ContactPage, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
