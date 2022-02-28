export default function Navbar() {
  return (
    <div className="flex items-center justify-between sm:px-52 sticky top-0 bg-white">
      <nav className="cursor-pointer mx-4 sm:mx-0">pratik</nav>
      <ul className="flex items-center justify-center">
        <li className="mx-4 hover:bg-black cursor-pointer rounded-bl-lg rounded-br-lg py-4 px-4 hover:text-white smooth">
          Home
        </li>
        <li className="mx-4 hover:bg-black cursor-pointer rounded-bl-lg rounded-br-lg py-4 px-4 hover:text-white smooth">
          Skills
        </li>
        <li className="mx-4 hover:bg-black cursor-pointer rounded-bl-lg rounded-br-lg py-4 px-4 hover:text-white smooth">
          About
        </li>
      </ul>
      <nav></nav>
    </div>
  );
}
