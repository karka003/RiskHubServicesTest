import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, BarChart, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Secure Your Digital Future
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We provide comprehensive IT security services to protect your business from evolving cyber threats.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/services/it-audit">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/services/cyber-training">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/services/it-audit">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>IT Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive assessment of your IT infrastructure and security controls.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/cyber-training">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Cybersecurity Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Empower your team with essential security knowledge and best practices.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/risk-management">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <BarChart className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identify and mitigate potential security risks before they become threats.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/pen-testing">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <Terminal className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Penetration Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Proactively identify vulnerabilities through controlled cyber attacks.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
