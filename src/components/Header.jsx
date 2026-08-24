import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="w-full h-15 bg-gray-800 flex justify-between items-center px-10 mb-5">
        <h1 className="font-bold text-2xl text-white">
          <Link to={"/"}>myCinema</Link>
        </h1>
        <ul className="flex gap-10 text-white">
          <li>
            <Link to={"/lista"}>Lista</Link>
          </li>
          <li>
            <Link to={"/lista"}>Lista</Link>
          </li>
          <li>
            <Link to={"/lista"}>Lista</Link>
          </li>
          <li>
            <Link to={"/lista"}>Lista</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
