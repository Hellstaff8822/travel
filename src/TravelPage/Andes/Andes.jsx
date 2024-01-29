import { useNavigate } from 'react-router-dom';
import { Hour } from '../../components/Icons/Travelcon/Hour';
import { Temp } from '../../components/Icons/Travelcon/Temp';
import { Stars } from '../../components/Icons/Travelcon/Stars';
import { Book } from '../../components/Icons/Travelcon/Book';
import { AndesPage } from '../../components/AndesPage';
import { ArrowLeft } from '../../components/Icons/Travelcon/ArrowLeft';
import { Arhive } from '../../components/Icons/Travelcon/Arhive';

export const Andes = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="andes">
      <div className="andes__container">
        
        <div className="andes__image">
          <img src="/andespage.png" alt="andes" />
          <ArrowLeft onGoBack={handleGoBack}/>
        <Arhive/>
        <AndesPage />
        </div>
        
        <div className="andes-overview">
          <div className="andes-overview__info">
            <div className="andes-overview__title">Overview</div>
            <div className="andes-overview__text">Details</div>
          </div>

          <div className="andes-value">
            <div className="andes-value__hour">
              {' '}
              <Hour />8 hours
            </div>
            <div className="andes-value__temp">
              {' '}
              <Temp />
              16 C
            </div>
            <div className="andes-value__star">
              <Stars />
              4.5
            </div>
          </div>
        </div>
        <div className="andes__desc">
          This vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features towering peaks, active
          volcanoes, deep canyons, expansive plateaus, and lush valleys. The
          Andes are also home to{' '}
        </div>
          <a className="andes__book" href="/">
            Book Now <Book />
          </a>
      </div>
    </div>
  );
};

export default Andes;
