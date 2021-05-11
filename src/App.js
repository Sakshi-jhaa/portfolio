
import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-corousal/my-corousal.component";
import TitleMessage from "./components/title-message/title-message.component"; 
import About from "./pages/about/about.component";
import Experience from "./pages/experience/experience.component";
const App=()=> {
  return (
    <div className="App">
      < MyNavbar /> 
      <MyCarousal />
      <TitleMessage />
      <About />
      <Experience />

    </div>
  );
}

export default App;
