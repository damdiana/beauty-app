import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Details.css";

type Props = {
  question: string;
  answer: string;
};

const Details = ({ question, answer }: Props) => {
  return (
    <div>
      <details className="border border-black p-2 m-2">
        <summary className="flex justify-between text-base">
          {question}
          <FontAwesomeIcon icon={faCaretDown} className="faIcon mr-1 h-5 w-5" />
        </summary>
        <div className="p-1">{answer} </div>
      </details>
    </div>
  );
};

export default Details;
