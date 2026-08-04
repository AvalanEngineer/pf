import '@styles/app.css';
import NavBar from "@components/sections/NavBar.tsx";
import MainContent from "@components/sections/MainContent.tsx";
function App() {

  return (
    <div className='app'>
        <div className='container'>
            <NavBar></NavBar>
            <MainContent/>
        </div>
    </div>
  );
}

export default App
