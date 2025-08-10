import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <SEO
        title="Login • SIP+ School Visit Tracking"
        description="Sign in to the SIP+ School Visit Tracking system to manage visits, schools, and generate official borang PDFs."
      />
      <section className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-foreground">Login to SIP+ System</h1>
        <Card>
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground" htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground" htmlFor="password">Password</label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full" disabled>
              Sign In (coming soon)
            </Button>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground mt-4">Supabase Auth wiring will be added next.</p>
      </section>
    </main>
  );
};

export default Login;
