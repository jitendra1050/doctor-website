import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Treatments from './components/Treatments';
import WhyChoose from './components/WhyChoose';
import AppointmentForm from './components/AppointmentForm';
import Testimonials from './components/Testimonials';
import ClinicInfo from './components/ClinicInfo';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Treatments />
        <WhyChoose />
        <AppointmentForm />
        <Testimonials />
        <ClinicInfo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
