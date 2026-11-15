import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { KeyNumbers } from './components/sections/KeyNumbers';
import { Background } from './components/sections/Background';
import { Method } from './components/sections/Method';
import { Findings } from './components/sections/Findings';
import { Pancasila } from './components/sections/Pancasila';
import { Alternatives } from './components/sections/Alternatives';
import { Conclusion } from './components/sections/Conclusion';
import { Team } from './components/sections/Team';
import { References } from './components/sections/References';

export function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <main id="utama">
        <Hero />
        <KeyNumbers />
        <Background />
        <Method />
        <Findings />
        <Pancasila />
        <Alternatives />
        <Conclusion />
        <Team />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;
