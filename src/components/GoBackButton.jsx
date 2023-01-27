import { useNavigate, useLocation } from "react-router-dom";

export const GoBackButton = () => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="goBackContainer">
      {location.pathname !== "/" &&
        <button className='goBackButton' onClick={() => navigate("/")}>
          Back
        </button>
      }
    </div>
  );
};