import { useNavigate } from 'react-router-dom';
import { Arhive } from '../../components/Icons/Travelcon/Arhive';
import { Hour } from '../../components/Icons/Travelcon/Hour';
import { Temp } from '../../components/Icons/Travelcon/Temp';
import { Stars } from '../../components/Icons/Travelcon/Stars';
import { Book } from '../../components/Icons/Travelcon/Book';
import { ArrowLeft } from '../../components/Icons/Travelcon/ArrowLeft';
import { FujiPage } from '../../components/FujiPage';

export const MountFuji = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="fuji">
      <div className="fuji__container">
        <div className="fuji-img">
          <img src="/travel1.png" alt="fuji" />
          <div className="fuji-img__info">
            <div className="fuji-img-header">
              <ArrowLeft onGoBack={handleGoBack} />
              <Arhive />
            </div>
            <div className="fuji-buttom__narrative">
              <FujiPage />
            </div>
          </div>
        </div>

        <div className="fuji-overview">
          <div className="fuji-overview__info">
            <div className="fuji-overview__title">Overview</div>
            <div className="fuji-overview__text">Details</div>
          </div>

          <div className="fuji-value">
            <div className="fuji-value__hour">
              <Hour />8 hours
            </div>
            <div className="fuji-value__temp">
              <Temp />
              16 C
            </div>
            <div className="fuji-value__star">
              <Stars />
              4.5
            </div>
          </div>
        </div>
        <div className="fuji__text">
        <div className="fuji__desc">
          This vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features towering peaks, active
          volcanoes, deep canyons, expansive plateaus, and lush valleys. The
          Andes are also home to{' '}
        </div>
        <a className="fuji__book" href="/">
          Book Now <Book />
        </a>
        </div>
      </div>
    </div>
  );
};

export default MountFuji;
