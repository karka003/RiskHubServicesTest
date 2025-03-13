import { ServiceHero } from "@/components/layout/ServiceHero";
import { ContactForm } from "@/components/layout/ContactForm";

export default function RiskManagement() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Risk Management"
        description="Identify, assess, and mitigate security risks before they impact your business with our comprehensive risk management services."
        image="https://images.unsplash.com/photo-1563452619267-bc16ef6cecec"
      />
      
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Approach</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Risk assessment and analysis</li>
              <li>• Threat modeling</li>
              <li>• Security roadmap development</li>
              <li>• Continuous monitoring</li>
            </ul>
          </div>
          <ContactForm service="Risk Management" pageName="risk-management" />
        </div>
      </div>
    </div>
  );
}
