import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon } from '../../../components/Icons/HeartIcon';
import { TravelFuji } from '../../../components/TravelFuji';
import { TravelAndes } from '../../../components/TravelAndes';

export const HomeTravel = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="home-travel">
      <motion.ul
        className="home-travel__list"
        variants={container}
        initial="hidden"
        animate="visible">
        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/mountfuji">
            <img src="/travel.png" alt="travel" />
            <TravelFuji />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/andes">
            <img src="/travel-img.png" alt="travel" />
            <TravelAndes />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/mountfuji">
            <img src="/travel.png" alt="travel" />
            <TravelFuji />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/andes">
            <img src="/travel-img.png" alt="travel" />
            <TravelAndes />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/mountfuji">
            <img src="/travel.png" alt="travel" />
            <TravelFuji />
          </Link>
        </motion.li>
        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/andes">
            <img src="/travel-img.png" alt="travel" />
            <TravelAndes />
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};
