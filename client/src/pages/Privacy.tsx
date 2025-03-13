import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="container py-12">
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            Risk Hub Services ("we" or "us") values your privacy and is committed to protecting your personal data.
            This privacy policy explains how we collect, use, and protect your information.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Company details</li>
            <li>Information about your service interests</li>
            <li>Communications you send to us</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Provide our services</li>
            <li>Send you important information</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:contact@riskhubservices.com">contact@riskhubservices.com</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
