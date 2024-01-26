import NavBar from "./Components/NavBar/page";
import Perfil from "./Components/Perfil/page";

export default function Home() {
    return (
        <main className="bg-gray-900 w-screen h-screen">
            <NavBar />
            <Perfil />
        </main>
  );
}
