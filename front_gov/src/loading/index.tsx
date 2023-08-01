import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  width?: number;
  height?: number;
  switchColor?: boolean;
}

const Loading = ({ width, height, switchColor = false }: props) => {
  return (
    <div className="flex w-full flex-1 items-center rounded-full p-1 justify-center">
      <FontAwesomeIcon
        className={`animate-spin ${
          switchColor ? "text-secondary" : "text-primary"
        } `}
        icon={faSpinner}
        width={width || 24}
        height={height || 24}
      />
    </div>
  );
};

export default Loading;
