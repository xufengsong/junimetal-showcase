import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PipesTubes from "./pages/PipesTubes";
import Fittings from "./pages/Fittings";
import Flanges from "./pages/Flanges";
import Fasteners from "./pages/Fasteners";
import CustomSolutions from "./pages/CustomSolutions";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />
          <Route path="/products/pipes-tubes" element={<PipesTubes />} />
          <Route path="/products/fittings" element={<Fittings />} />
          <Route path="/products/flanges" element={<Flanges />} />
          <Route path="/products/fasteners" element={<Fasteners />} />
          <Route path="/products/custom-solutions" element={<CustomSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
