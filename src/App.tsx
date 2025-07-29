import { Hero, Profile, Skills, Projects, Footer } from 'components/sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
