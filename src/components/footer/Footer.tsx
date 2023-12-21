import SocialMenu from "../social-links/SocialMenu";

function Footer() {
  return (
    <footer className="h-[120px]-x fixed-x bottom-0 left-0 w-full z-0 bg-accent text-accent-foreground border-t border-accent-foreground
    
    ">
      <div className="container flex flex-col items-center">
        <SocialMenu className2="flex items-center" />
        <div>
            <span>&copy; zak cnaan &hearts; 2023.</span>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
