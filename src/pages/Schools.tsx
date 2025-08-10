import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2, Search, MapPin, Phone, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Schools = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Schools Directory • SIP+ Visit Tracking"
        description="Browse the comprehensive SIP+ school directory, search by district or name, and start new visits with detailed school information."
      />
      
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">School Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse schools in your district and start new visits with comprehensive school information.
          </p>
        </div>
        
        <Card className="gradient-card shadow-soft border-0 animate-slide-up">
          <CardHeader className="pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <CardTitle className="text-2xl font-semibold text-foreground">All Schools</CardTitle>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search schools or districts..."
                    className="pl-10 h-11 bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <Link to="/visits/new">
                  <Button className="gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0">
                    <Plus className="w-4 h-4 mr-2" />
                    New Visit
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="rounded-lg border border-border/50 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30 hover:bg-muted/50">
                    <TableHead className="font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        School Name
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        District
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">Address</TableHead>
                    <TableHead className="font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Contact
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-foreground text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <div className="flex flex-col items-center gap-4 text-muted-foreground">
                        <Building2 className="w-12 h-12 opacity-50" />
                        <div>
                          <p className="text-lg font-medium">No schools found</p>
                          <p className="text-sm">School data will be loaded from Supabase database soon.</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Schools;