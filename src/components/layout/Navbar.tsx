import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-foreground">SIP+ Tracking</Link>
        <div className="flex items-center gap-4">
          <Link to="/schools" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Schools</Link>
          <Link to="/history" className="text-sm text-foreground/80 hover:text-foreground transition-colors">History</Link>
          <Link to="/visits/new" className="text-sm text-primary hover:underline">New Visit</Link>
          <Link to="/login" className="text-sm text-foreground/80 hover:text-foreground">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
