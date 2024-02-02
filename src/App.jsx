import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { MountFuji } from './TravelPage/MountFuji/MoutFuji';
import { SplashScreen } from './components/SplashScreen';
import { useState } from 'react';
import { MenuIcon } from './components/Icons/MenuIcon';
import { useLocation } from 'react-router-dom';
import { Andes } from './TravelPage/Andes/Andes';
import { History } from './views/History';
import { Heart } from './views/Heart';
import { Profile } from './views/Profile';

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;

  console.log(currentUrl);
  const [isSpinner, setIsSpinner] = useState(true);

  setTimeout(() => {
    setIsSpinner(false);
  }, 3000);
  return (
    <>
      {!isSpinner && (
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mountfuji" element={<MountFuji />}></Route>
            <Route path="/andes" element={<Andes />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/heart" element={<Heart />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>

          {!(currentUrl === '/mountfuji' || currentUrl === '/andes') && (
            <header>
              <NavLink exact activeClassName="is-active" to="/">
                <span className="header">
                  <MenuIcon type="home" />
                </span>
                <span className="header-active">
                  <MenuIcon type="home-active" />
                </span>
              </NavLink>
              <NavLink activeClassName="is-active" to="/history">
                <span className="header">
                  <MenuIcon type="history" />
                </span>
                <span className="header-active">
                  <MenuIcon type="history-active" />
                </span>
              </NavLink>
              <NavLink activeClassName="is-active" to="/heart">
                <span className="header">
                  <MenuIcon type="heart" />
                </span>
                <span className="header-active">
                  <MenuIcon type="heart-active" />
                </span>
              </NavLink>
              <NavLink activeClassName="is-active" to="/profile">
                <span className="header">
                  <MenuIcon type="profile" />
                </span>
                <span className="header-active">
                  <MenuIcon type="profile-active" />
                </span>
              </NavLink>
            </header>
          )}
        </>
      )}
      {isSpinner && <SplashScreen />}
    </>
  );
}

export default App;
