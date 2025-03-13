import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Cookies() {
  return (
    <div className="container py-12">
      <Card>
        <CardHeader>
          <CardTitle>Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience and understand how you use our site.
          </p>

          <h2>Types of Cookies We Use</h2>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function properly
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences and settings
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies
            that are already on your computer and you can set most browsers to prevent
            them from being placed.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a href="mailto:contact@riskhubservices.com">contact@riskhubservices.com</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
