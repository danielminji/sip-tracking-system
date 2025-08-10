import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Search, Calendar, User, Eye, Download, Filter } from "lucide-react";

const History = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Visit History • SIP+ Visit Tracking"
        description="View and manage your complete SIP+ school visit history. Filter by school, date range, and officer. Access and regenerate official borang PDFs."
      />
      
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Visit History</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access your complete visit records, filter by date ranges, and regenerate official borang PDFs.
          </p>
        </div>
        
        <Card className="gradient-card shadow-soft border-0 animate-slide-up">
          <CardHeader className="pb-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <CardTitle className="text-2xl font-semibold text-foreground">All Visits</CardTitle>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search by school or officer..."
                    className="pl-10 h-11 bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <Button variant="outline" className="h-11 px-4">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
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
                        <Calendar className="w-4 h-4" />
                        Date
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">School</TableHead>
                    <TableHead className="font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Officer
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">Status</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-16">
                      <div className="flex flex-col items-center gap-6 text-muted-foreground">
                        <Clock className="w-16 h-16 opacity-50" />
                        <div className="space-y-2">
                          <p className="text-xl font-medium">No visits recorded yet</p>
                          <p className="text-sm max-w-md">
                            Your visit history will appear here once you start recording school visits. 
                            Visit data will be loaded from the Supabase database.
                          </p>
                        </div>
                        <div className="flex items-center gap-4 pt-4">
                          <Badge variant="secondary" className="px-3 py-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Completed
                          </Badge>
                          <Badge variant="secondary" className="px-3 py-1">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            In Progress
                          </Badge>
                          <Badge variant="secondary" className="px-3 py-1">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                            Draft
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Sample data preview */}
            <div className="mt-8 p-6 bg-muted/20 rounded-lg border border-border/30">
              <h4 className="font-medium text-foreground mb-4">Sample Visit Record (Preview)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">2025-01-15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">School:</span>
                  <span className="font-medium">SMK Kuantan</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Officer:</span>
                  <span className="font-medium">Ahmad bin Hassan</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline" disabled>
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" className="gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default History;
