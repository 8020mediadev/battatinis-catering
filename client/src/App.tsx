import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Inquiry from "./pages/Inquiry";
import Corporate from "./pages/services/Corporate";
import Parties from "./pages/services/Parties";
import Weddings from "./pages/services/Weddings";
import BBQ from "./pages/services/BBQ";
import Graduation from "./pages/services/Graduation";
import Holiday from "./pages/services/Holiday";
import ThursdayTrayDay from "./pages/ThursdayTrayDay";
import About from "./pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/order-catering" component={Inquiry} />
      <Route path="/services/corporate" component={Corporate} />
      <Route path="/services/parties" component={Parties} />
      <Route path="/services/weddings" component={Weddings} />
      <Route path="/services/bbq" component={BBQ} />
      <Route path="/services/graduation" component={Graduation} />
      <Route path="/services/holiday" component={Holiday} />
      <Route path="/thursday-tray-day" component={ThursdayTrayDay} />
      <Route path="/about" component={About} />
      {/* Redirect old combined route */}
      <Route path="/services/graduation-holiday">
        <Redirect to="/services/graduation" />
      </Route>
      {/* Redirect old inquiry route */}
      <Route path="/inquiry">
        <Redirect to="/order-catering" />
      </Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
