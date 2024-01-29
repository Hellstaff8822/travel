export const ArrowLeft = ({ onGoBack }) => {
  const handleContainerClick = () => {
    // Додати логіку або викликати функцію onGoBack при кліці на контейнер
    onGoBack();
  };
  return (
    <div className="andes__arrow" onClick={handleContainerClick}>
      <button className='andes__arrow-button' onClick={onGoBack}></button>
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none">
      <path
        d="M6.37686 13L1.4375 8.06061C0.854167 7.47728 0.854167 6.52274 1.4375 5.9394L6.37686 1"
        stroke="#E1E1E1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    </div>
   
  );
};
