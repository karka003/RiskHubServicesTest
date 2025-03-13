import { ServiceHero } from "@/components/layout/ServiceHero";
import { ContactForm } from "@/components/layout/ContactForm";

export default function ITAudit() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="IT Security Audit"
        description="Our comprehensive IT security audit service helps identify vulnerabilities and ensures your systems meet industry standards and compliance requirements."
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
      />
      
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What We Offer</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Infrastructure security assessment</li>
              <li>• Compliance gap analysis</li>
              <li>• Security controls evaluation</li>
              <li>• Risk assessment and remediation planning</li>
            </ul>
          </div>
          <ContactForm service="IT Audit" pageName="it-audit" />
        </div>
      </div>
    </div>
  );
}
