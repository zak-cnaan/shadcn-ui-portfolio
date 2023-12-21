import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sinc from "../sink/Sink";
import { Button } from "../ui/button";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
     <Header />

      <main className="flex flex-col flex-grow pb-[120px]-x relative z-10">
        <div className="flex-grow bg-background">
        <Sinc />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              impedit incidunt iste corporis laborum veniam rerum iusto tempore
              soluta! Placeat blanditiis sapiente corporis nemo magnam.
              Cupiditate sequi autem voluptate minima!
            </p>
            <Button type="submit">Submit</Button>
            <Button variant={"secondary"}>Submit</Button>
            <label htmlFor="airplane-mode">Airplane Mode</label>
          </div>
        </div>
      </main>

     <Footer />
    </div>
  );
}

export default App;
