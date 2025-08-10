import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Save, Download, Building2, Calendar, User, Crown, Settings, BookOpen, Trophy, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VisitForm = () => {
  const standards = [
    {
      id: "s1",
      code: "Standard 1",
      title: "Kepimpinan",
      description: "Leadership and vision assessment",
      icon: Crown,
      color: "bg-blue-500"
    },
    {
      id: "s2", 
      code: "Standard 2",
      title: "Pengurusan Organisasi",
      description: "Organizational management evaluation",
      icon: Settings,
      color: "bg-green-500"
    },
    {
      id: "s31",
      code: "Standard 3.1", 
      title: "Pengurusan Kurikulum",
      description: "Curriculum management review",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      id: "s32",
      code: "Standard 3.2",
      title: "Pengurusan Kokurikulum", 
      description: "Co-curricular activities management",
      icon: Trophy,
      color: "bg-orange-500"
    },
    {
      id: "s33",
      code: "Standard 3.3",
      title: "Pengurusan Hal Ehwal Murid",
      description: "Student affairs management",
      icon: Users,
      color: "bg-pink-500"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="New Visit • SIP+ Visit Tracking"
        description="Record a comprehensive SIP+ school visit across all 5 standards: Leadership, Organization, Curriculum, Co-curriculum, and Student Affairs. Generate official borang PDF reports."
      />
      
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">New School Visit</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Record your comprehensive school assessment across all SIP+ standards and generate the official borang PDF.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Visit Details Header */}
          <Card className="gradient-card shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Visit Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-sm font-medium text-foreground">School</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-background/50 border-border/50">
                      <SelectValue placeholder="Select school..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coming-soon">Schools coming soon...</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium text-foreground">Visit Date</Label>
                  <Input 
                    id="date"
                    type="date" 
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="officer" className="text-sm font-medium text-foreground">Officer</Label>
                  <Input 
                    id="officer"
                    placeholder="Officer name..." 
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Completion Progress</span>
                  <span className="text-sm text-muted-foreground">0/5 Standards</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Standards Assessment */}
          <Card className="gradient-card shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Standards Assessment</CardTitle>
              <p className="text-muted-foreground">Complete each standard to generate the official borang PDF.</p>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full space-y-4">
                {standards.map((standard) => (
                  <AccordionItem 
                    key={standard.id} 
                    value={standard.id}
                    className="border border-border/50 rounded-lg px-6 py-2 bg-background/30"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-12 h-12 rounded-lg ${standard.color} flex items-center justify-center shadow-sm`}>
                          <standard.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-semibold text-foreground">{standard.code}</h3>
                            <Badge variant="outline" className="text-xs">Not Started</Badge>
                          </div>
                          <p className="text-base font-medium text-foreground mb-1">{standard.title}</p>
                          <p className="text-sm text-muted-foreground">{standard.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6 pb-6">
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-medium text-foreground">Evidence Checklist</h4>
                            <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                              <p className="text-sm text-muted-foreground">Evidence items will be loaded based on the official borang structure.</p>
                              <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm">
                                  <input type="checkbox" className="rounded border-border" />
                                  <span>Sample evidence item 1</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                  <input type="checkbox" className="rounded border-border" />
                                  <span>Sample evidence item 2</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-medium text-foreground">Score & Remarks</h4>
                            <Select>
                              <SelectTrigger className="bg-background/50 border-border/50">
                                <SelectValue placeholder="Select score (0-4)" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">0 - Needs Improvement</SelectItem>
                                <SelectItem value="1">1 - Below Standard</SelectItem>
                                <SelectItem value="2">2 - Meets Standard</SelectItem>
                                <SelectItem value="3">3 - Above Standard</SelectItem>
                                <SelectItem value="4">4 - Excellent</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="font-medium text-foreground">Remarks & Observations</Label>
                          <Textarea 
                            placeholder={`Enter your detailed remarks for ${standard.title}...`}
                            className="min-h-24 bg-background/50 border-border/50 focus:border-primary resize-none"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card className="gradient-card shadow-soft border-0">
            <CardContent className="py-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" size="lg" className="px-8 py-6" disabled>
                  <Save className="w-5 h-5 mr-3" />
                  Save Progress
                </Button>
                <Button size="lg" className="gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0 px-8 py-6" disabled>
                  <Download className="w-5 h-5 mr-3" />
                  Generate PDF
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Database integration and PDF generation coming soon
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default VisitForm;
