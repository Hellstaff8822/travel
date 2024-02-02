import { useState, useRef, useEffect} from "react";
import { useSpring, animated } from "react-spring";

export const HomePlaces = () => {
  const [tab, setTab] = useState(1);
  const [popular, setViewAll] = useState(true);
  const [defaultHeight, setdefaultHeight] = useState(54);
  const [prevHeight, setPrevHeight] = useState(defaultHeight);
  const [display, setDisplay] = useState("flex");
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current) {
      setPrevHeight(ref.current.clientHeight);
    }
  }, []);

  const clickViewAll = () => {
    if (ref.current.clientHeight === 0) {
      setPrevHeight(defaultHeight);  
    } else {
    setPrevHeight(ref.current.clientHeight);
    }
    setViewAll(false);
  };

  useEffect(() => {
    if (prevHeight > 0 && prevHeight !==defaultHeight) {
      setdefaultHeight(prevHeight);
    }
  }, [prevHeight]);

  const animationHomePlacesList = useSpring({
    onStart: () => {
      if (popular) {
        setDisplay("flex");
      }
    },
    opacity: popular ? 1 : 0,
    height: popular ? (prevHeight !== null ? `${prevHeight}px` : '${defaultHeight}px' ) : '0',
    transform: popular ? "scaleY(1)" : "scaleY(0)",
    marginBottom: popular ? "21px" : "0",
    onRest: () => {
      if (!popular) {
        setDisplay("none");
      }
    },
    config: {
      duration: 300,
    },
  });

  const animationHomePlacesHeader = useSpring({
    marginBottom: popular ? "40px" : "0",
    config: {
      duration: 300,
    },
  });

  return (
    <div className="home-places">
      <animated.div
        className="home-places__header"
        style={animationHomePlacesHeader}
      >
        <div
          onClick={() => setViewAll(true)}
          className={`home-places__title ${popular ? "is-active-gruop" : ""}`}
        >
          Popular places
        </div>
        <div
          onClick={clickViewAll}
          className={`home-places__view-all ${
            popular ? "" : "is-active-gruop"
          }`}
        >
          View all
        </div>
      </animated.div>

      <animated.div
        className="home-places__list"
        style={{ ...animationHomePlacesList, display: display }}
        ref={ref}
      >
        <div
          onClick={() => setTab(1)}
          className={`home-places__item ${tab === 1 ? "is-active" : ""}`}
        >
          Most Viewed
        </div>
        <div
          onClick={() => setTab(2)}
          className={`home-places__item ${tab === 2 ? "is-active" : ""}`}
        >
          Nearby
        </div>
        <div
          onClick={() => setTab(3)}
          className={`home-places__item ${tab === 3 ? "is-active" : ""}`}
        >
          Latest
        </div>
      </animated.div>
    </div>
  );
};
