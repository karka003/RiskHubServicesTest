import { ServiceHero } from "@/components/layout/ServiceHero";
import { ContactForm } from "@/components/layout/ContactForm";

export default function CyberTraining() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Cybersecurity Training"
        description="Empower your team with the knowledge and skills needed to protect your organization from cyber threats through our comprehensive training programs."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      />
      
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Training Programs</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Security awareness training</li>
              <li>• Phishing simulation exercises</li>
              <li>• Incident response training</li>
              <li>• Compliance training</li>
            </ul>
          </div>
          <ContactForm service="Cybersecurity Training" pageName="cyber-training" />
        </div>
      </div>
    </div>
  );
}
