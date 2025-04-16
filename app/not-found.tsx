import Link from "next/link";
import '../styles/common.css';

const NotFoundPage = () => {
  //Auf deutsch bitte
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFoundPage;
