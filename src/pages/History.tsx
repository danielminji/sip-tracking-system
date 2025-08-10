import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const History = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <SEO
        title="Visit History • SIP+ Visit Tracking"
        description="View past SIP+ school visits, filter by school and date, and open the official borang PDF."
      />
      <section>
        <h1 className="text-3xl font-semibold mb-6 text-foreground">Visit History</h1>
        <Card>
          <CardHeader>
            <CardTitle>All Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Officer</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No visits yet. Data will appear once we connect Supabase tables.
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

export default History;
