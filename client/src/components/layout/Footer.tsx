import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="font-bold">Risk Hub Services</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Protecting your digital assets with industry-leading security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Contact</h4>
              <p className="text-sm text-muted-foreground">contact@riskhubservices.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 Risk Hub Services. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
              <button 
                className="hover:text-primary transition-colors"
                onClick={() => {
                  // This is where you would typically trigger your cookie consent manager
                  alert("Cookie preferences can be managed here");
                }}
              >
                Manage Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}