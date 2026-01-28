import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";

const RootLayout = () => (
  <>
    <nav className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4">
        <Link 
          to="/" 
          className="text-gray-900 font-semibold hover:text-red-500 transition-colors [&.active]:text-red-500 [&.active]:border-b-2 [&.active]:border-red-500 [&.active]:pb-1"
        >
          Home
        </Link>
      </div>
    </nav>
    <Outlet />
    <TanStackRouterDevtools />
    <Footer />
  </>
);

export const Route = createRootRoute({ component: RootLayout });