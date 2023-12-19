import CountBtn from '@/components/CountBtn';
import ReactSVG from '@/assets/react.svg';
import { Badge } from '@/components/ui/badge';
import { Button } from './components/ui/button';
import { Switch } from './components/ui/switch';

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">

<div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>

    
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={'/vite.svg'} alt="Vite Logo" className="w-32" />
        </div>
        <a href="https://ui.shadcn.com" rel="noopener noreferrer nofollow" target="_blank">
          <Badge variant="outline">shadcn/ui</Badge>
          <Button variant="link" onClick={() => null}>Button</Button>
        </a>
        <CountBtn />
      </div>
    </main>
  );
}

export default App;
