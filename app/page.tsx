import NavBar from "./Components/NavBar/page";
import Perfil from "./Components/Perfil/page";
import SobreMim from "./Components/SobreMim/page";

export default function Home() {
    return (
        <main className="bg-gray-900 w-screen h-screen">
            <NavBar />
            <Perfil />
            <SobreMim />
        </main>
  );
}
