import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/Hero";
import ChillVibesPage from "./pages/moods/ChillVibesPage";
import BuzzModePage from "./pages/moods/BuzzModePage";
import PartyStarterPage from "./pages/moods/PartyStarterPage";
import FullBlastPage from "./pages/moods/FullBlastPage";
import DrinkOptionsPage from "./pages/drinks/DrinkOptionsPage";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div
        className="fixed inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/bg-bar.jpg')",
          filter: "brightness(0.25)",
          animation: "bgFadeIn 0.6s ease-out forwards",
        }}
      ></div>
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/chill-vibes" element={<ChillVibesPage />} />
          <Route path="/buzz-mode" element={<BuzzModePage />} />
          <Route path="/party-starter" element={<PartyStarterPage />} />
          <Route path="/full-blast" element={<FullBlastPage />} />
          // App.tsx - add this route
          <Route
            path="/drinks/:mood/:category"
            element={<DrinkOptionsPage />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
