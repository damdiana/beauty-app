import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Favorites() {
  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col h-3/5 ">
        <h2 className="text-lg m-2">
          Your favorite products <FontAwesomeIcon icon={faHeart} />
        </h2>
      </div>
    </div>
  );
}

export default Favorites;
