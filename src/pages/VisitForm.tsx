import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const VisitForm = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <SEO
        title="New Visit • SIP+ Visit Tracking"
        description="Record a new SIP+ school visit across Standards 1, 2, 3.1, 3.2, and 3.3 and generate the official borang PDF."
      />
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold text-foreground">New Visit</h1>
        <Card>
          <CardHeader>
            <CardTitle>Visit Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="s1">
                <AccordionTrigger>Standard 1 – Kepimpinan</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Remarks..." />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="s2">
                <AccordionTrigger>Standard 2 – Pengurusan Organisasi</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Remarks..." />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="s31">
                <AccordionTrigger>Standard 3.1 – Pengurusan Kurikulum</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Remarks..." />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="s32">
                <AccordionTrigger>Standard 3.2 – Pengurusan Kokurikulum</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Remarks..." />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="s33">
                <AccordionTrigger>Standard 3.3 – Pengurusan Hal Ehwal Murid</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Remarks..." />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex items-center gap-3">
              <Button variant="secondary" disabled>Save (soon)</Button>
              <Button disabled>Generate PDF (soon)</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default VisitForm;
