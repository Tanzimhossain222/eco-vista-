import Card from "./Card";
import Link from "next/link";

const NoLocationInfo = ({ location }) => {
  return <Card>
    <p>Sorry, we couldn't find any information for the location <strong>{location}</strong>.</p>

    <Link href="/" >
      <span className="inline-block my-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded transition duration-300 ease-in-out hover:bg-blue-600">Go back home</span>
    </Link>

  </Card>;
};

export default NoLocationInfo;
