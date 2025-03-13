import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="container py-12">
      <Card className="bg-background/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2 className="text-white text-2xl mt-8 mb-4">Introduction</h2>
          <p className="text-white/90">
            Risk Hub Services ("we" or "us") values your privacy and is committed to protecting your personal data.
            This privacy policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-white text-2xl mt-8 mb-4">Information We Collect</h2>
          <p className="text-white/90">We collect information that you provide directly to us, including:</p>
          <ul className="text-white/90 list-disc pl-6 mt-2">
            <li>Name and contact information</li>
            <li>Company details</li>
            <li>Information about your service interests</li>
            <li>Communications you send to us</li>
          </ul>

          <h2 className="text-white text-2xl mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-white/90">We use the information we collect to:</p>
          <ul className="text-white/90 list-disc pl-6 mt-2">
            <li>Respond to your inquiries</li>
            <li>Provide our services</li>
            <li>Send you important information</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-white text-2xl mt-8 mb-4">Data Protection</h2>
          <p className="text-white/90">
            We implement appropriate security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-white text-2xl mt-8 mb-4">Contact Us</h2>
          <p className="text-white/90">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:contact@riskhubservices.com" className="text-primary hover:text-primary/80 underline">
              contact@riskhubservices.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}