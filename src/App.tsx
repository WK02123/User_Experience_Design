import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlayStation from "./pages/PlayStation";
import PlayStation4 from "./pages/PlayStation4";
import NintendoSwitch from "./pages/NintendoSwitch";
import Games from "./pages/Games";
import TrackOrder from "./pages/TrackOrder";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/playstation" element={<PlayStation />} />
          <Route path="/playstation4" element={<PlayStation4 />} />
          <Route path="/nintendo-switch" element={<NintendoSwitch />} />
          <Route path="/games" element={<Games />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
