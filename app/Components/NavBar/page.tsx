function NavBar() {
  return (
    <>
      <nav className="flex justify-center">
        <div className="">
          <ul className="flex p-2 justify-center px-5">
            <li className="">
              <a
                className="size-4 text-gray-300 p-2 hover:text-gray-400"
                href="#perfil"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                className="size-4 text-gray-300 p-2 hover:text-gray-400"
                href="#skills"
              >
                Skills
              </a>
            </li>
                      
            <li className="">
              <a
                className="size-4 text-gray-300 p-2 hover:text-gray-400"
                href="#xp"
              >
                Experiencia
              </a>
            </li>
            <li className="">
              <a
                className="size-4 text-gray-300 p-2 hover:text-gray-400"
                href="#formações"
              >
                Formações
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
