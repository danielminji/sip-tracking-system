import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Shield, Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Login • SIP+ School Visit Tracking"
        description="Secure login to the SIP+ School Visit Tracking system for authorized officers to manage school visits and generate official borang PDFs."
      />
      
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <section className="container mx-auto px-4 py-24 flex items-center justify-center relative">
        <div className="w-full max-w-md animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to access your SIP+ dashboard</p>
          </div>
          
          <Card className="gradient-card shadow-soft border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold text-foreground">Officer Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email Address
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="officer@sip.edu.my" 
                  className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  Password
                </Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <Button 
                className="w-full h-12 gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0 font-medium" 
                disabled
              >
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Supabase authentication coming soon
                </p>
                <button className="text-sm text-primary hover:underline mt-2">
                  Forgot your password?
                </button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Need access? Contact your system administrator
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
