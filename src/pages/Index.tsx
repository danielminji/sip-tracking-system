import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="SIP+ School Visit Tracking & Reporting System"
        description="Record visits, select schools, and generate official SIP+ borang PDFs."
      />
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">SIP+ School Visit Tracking & Reporting System</h1>
        <p className="text-lg text-muted-foreground mb-8">Digitize your borang, manage school visits, and generate official PDFs.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/visits/new"><Button>Start New Visit</Button></Link>
          <Link to="/schools"><Button variant="secondary">Browse Schools</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
