import { Hero, Profile, TeachStack, Projects, Footer } from 'components/sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Hero />
      <Profile />
      <TeachStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
