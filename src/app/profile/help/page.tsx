import Details from "@/components/Details/Details";

const Help = () => {
  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col h-3/5 ">
        <h2 className="text-lg m-2"> HELP CENTER </h2>
        <Details
          question="How can I change my username?"
          answer="Go to the login page"
        />
        <Details
          question="How can I change my username?"
          answer="Go to the login page"
        />
        <Details
          question="How can I change my username?"
          answer="Go to the login page"
        />
      </div>
    </div>
  );
};

export default Help;
