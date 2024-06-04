import Navbar from '@/app/ui/dashboard/sidenav';
import Selection1 from '../ui/selections/selection1';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
    {/* Navbar or TopNav */}
    <div className="w-full"> {/* Full width for the navbar */}
        <Navbar />
    </div>
    {/* Main content area */}
    <div className="flex-grow overflow-auto md:p-2 lg:p-2">
        {children}
    </div>
</div>


  );
}
