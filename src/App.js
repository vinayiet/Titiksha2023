import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ButtonAppBar from './components/Navigation';
import Carousel from './components/Carousel';
import Yt from './components/Embed';
import Footer from './components/Footer';
import SignUp from './SignUp';
import EventDetailsWithMap from './components/EventDetail';

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignupPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Carousel />
      <Yt/>
      <EventDetailsWithMap/>
    </>
  );
}

function SignupPage() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
