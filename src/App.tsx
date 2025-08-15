import { Toaster } from "@/components/ui/toaster";
import BackToTop from '@/components/BackToTop'
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <BackToTop/>
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
