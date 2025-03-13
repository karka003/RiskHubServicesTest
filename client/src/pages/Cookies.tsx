import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Cookies() {
  return (
    <div className="container py-12 px-8 md:px-16 max-w-6xl mx-auto">
      <Card className="bg-background/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl">Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2 className="text-white text-2xl mt-8 mb-4">What Are Cookies</h2>
          <p className="text-white/90">
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience and understand how you use our site.
          </p>

          <h2 className="text-white text-2xl mt-8 mb-4">Types of Cookies We Use</h2>
          <ul className="text-white/90 list-disc pl-6 mt-2">
            <li>
              <strong className="text-white">Essential Cookies:</strong> Required for the website to function properly
            </li>
            <li>
              <strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website
            </li>
            <li>
              <strong className="text-white">Functional Cookies:</strong> Remember your preferences and settings
            </li>
          </ul>

          <h2 className="text-white text-2xl mt-8 mb-4">Managing Cookies</h2>
          <p className="text-white/90">
            You can control and/or delete cookies as you wish. You can delete all cookies
            that are already on your computer and you can set most browsers to prevent
            them from being placed.
          </p>

          <h2 className="text-white text-2xl mt-8 mb-4">Contact Us</h2>
          <p className="text-white/90">
            If you have any questions about our use of cookies, please contact us at{" "}
            <a href="mailto:contact@riskhubservices.com" className="text-primary hover:text-primary/80 underline">
              contact@riskhubservices.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}