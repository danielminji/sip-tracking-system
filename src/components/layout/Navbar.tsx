import { Link } from "react-router-dom";
import { Building2, Clock, FileText, LogIn, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white text-sm font-bold">
            S+
          </div>
          <span className="hidden sm:inline hero-text">SIP+ Tracking</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/schools" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <Building2 className="w-4 h-4 group-hover:text-primary transition-colors" />
              Schools
            </Link>
            <Link to="/history" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <Clock className="w-4 h-4 group-hover:text-primary transition-colors" />
              History
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/visits/new">
              <Button className="gradient-primary hover:shadow-glow transition-all duration-300 border-0">
                <Plus className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">New Visit</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
