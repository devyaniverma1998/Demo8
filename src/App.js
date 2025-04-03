import { Routes, Route } from "react-router-dom";  
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import Faqs from "./components/Faqs";
import Feature from "./components/Feature";
import Packages from "./components/Packages";
import Privacy from "./components/Privacy";
import Registration from "./components/Registration";
import Service from "./components/Service";
import Support from "./components/Support";
import Team from "./components/Team";
import Terms from "./components/Terms";
import Testimonial from "./components/Testimonial";
import './styles/style.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/service" element={<Service />} />
        <Route path="/support" element={<Support />} />
        <Route path="/team" element={<Team />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
