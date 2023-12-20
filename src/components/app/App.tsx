import Header from "../header/Header";
import { Button } from "../ui/button";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
     <Header />

      <main className="flex flex-col flex-grow pb-[120px] relative z-10">
        <div className="flex items-center space-x-2 bg-[gray] flex-grow min-h-[1200px] justify-start flex-col">
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

      <footer className="h-[120px] bg-[red] fixed bottom-0 left-0 w-full z-0">
        footer
      </footer>
    </div>
  );
}

export default App;
