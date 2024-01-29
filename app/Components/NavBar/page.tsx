function NavBar() {
  return (
    <>
      <header>
        <nav className="flex justify-between p-2">
          <div>
            <img src="#" alt="logo" />
          </div>
          <div className="p-2">
            <a className="font-bold text-slate-500 p-2 m-1 " href="#">
              Perfil
            </a>
            <a className="font-bold text-slate-500 p-2 m-1 " href="#">
              Sobre mim
            </a>
            <a className="font-bold text-slate-500 p-2 m-1 " href="#">
              Skills
            </a>
            <a className="font-bold text-slate-500 p-2 m-1 " href="#">
              Projetos
            </a>
            <a className="font-bold text-slate-500 p-2 m-1 " href="#">
              Formações
            </a>
            <a className="font-bold text-slate-500 p-2 m-1 " href="#">
              Experiencia
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
