import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold">Risk Hub Services</span>
          </a>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/services/it-audit">
            <Button variant="ghost">IT Audit</Button>
          </Link>
          <Link href="/services/cyber-training">
            <Button variant="ghost">Cybersecurity Training</Button>
          </Link>
          <Link href="/services/risk-management">
            <Button variant="ghost">Risk Management</Button>
          </Link>
          <Link href="/services/pen-testing">
            <Button variant="ghost">Penetration Testing</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}