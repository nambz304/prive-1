import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SchemaMarkup from "./components/SchemaMarkup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SchemaMarkup />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    {/* Chatwoot widget */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              if (window.chatwootSDK) {
                window.chatwootSDK.run({
                  // websiteToken: 'iFcN18XNWZypKTqpTcMEGJf4', // Ngoc
                  websiteToken: 'qQpvZFxN5nEuwh3v2ReSTedU', // Nam
                  baseUrl: BASE_URL,
                  launcherTitle: 'Chat'
                });
              }
            }
          })(document,"script");
        `,
      }}
    />
  </QueryClientProvider>
);

export default App;
