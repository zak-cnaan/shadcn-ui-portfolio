import { Button } from "../ui/button";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen container md:mx-auto">
      <div className="flex items-center space-x-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit incidunt iste corporis laborum veniam rerum iusto tempore soluta! Placeat blanditiis sapiente corporis nemo magnam. Cupiditate sequi autem voluptate minima!</p>
      <Button type="submit">Submit</Button>
      <Button variant={"secondary"}>Submit</Button>
        <label htmlFor="airplane-mode">Airplane Mode</label>
      </div>
    </main>
  );
}

export default App;
