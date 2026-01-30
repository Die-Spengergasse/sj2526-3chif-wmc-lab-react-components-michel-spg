import { createRootRoute, Link, Outlet, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

const RootLayout = () => {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Bei jedem Routenwechsel nach oben scrollen
    const unsub = router.subscribe('onLoad', handleRouteChange);
    
    return () => unsub();
  }, [router]);

  return (
    <>
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4">
          <Link
            to="/"
            className="text-gray-900 font-semibold hover:text-red-500 transition-colors [&.active]:text-red-500 [&.active]:border-b-2 [&.active]:border-red-500 [&.active]:pb-1"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="text-gray-900 font-semibold hover:text-red-500 transition-colors [&.active]:text-red-500 [&.active]:border-b-2 [&.active]:border-red-500 [&.active]:pb-1"
          >
            Rezepte
          </Link>
        </div>
      </nav>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
