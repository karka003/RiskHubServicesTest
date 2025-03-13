import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ITAudit from "@/pages/services/ITAudit";
import CyberTraining from "@/pages/services/CyberTraining";
import RiskManagement from "@/pages/services/RiskManagement";
import PenTesting from "@/pages/services/PenTesting";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/it-audit" component={ITAudit} />
      <Route path="/services/cyber-training" component={CyberTraining} />
      <Route path="/services/risk-management" component={RiskManagement} />
      <Route path="/services/pen-testing" component={PenTesting} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/cookies" component={Cookies} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;