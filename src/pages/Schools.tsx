import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Schools = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <SEO
        title="Schools • SIP+ Visit Tracking"
        description="Browse the SIP+ school directory, filter by district, and start a new visit."
      />
      <section>
        <h1 className="text-3xl font-semibold mb-6 text-foreground">School Directory</h1>
        <Card>
          <CardHeader>
            <CardTitle>All Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No schools yet. We’ll load from Supabase soon.
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
