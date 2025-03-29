// // LandingPage.js
// import React, { useState, lazy, Suspense } from 'react';
// import { Menu, X } from 'lucide-react';

// // Lazy load the components
// const LoginForm = lazy(() => import('../Auth/LoginPage'));
// const SignupForm = lazy(() => import('../Auth/SignUpPage'));

// const LandingPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(false);

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-800 to-red-700">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 animate-slide-1" 
//                style={{
//                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//                  backgroundSize: '40px 40px',
//                }} />
//           <div className="absolute inset-0 animate-slide-2" 
//                style={{
//                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//                  backgroundSize: '30px 30px',
//                }} />
//           <div className="absolute inset-0 animate-slide-3"
//                style={{
//                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//                  backgroundSize: '20px 20px',
//                }} />
//         </div>
//       </div>

//       <style>{`
//         @keyframes slide1 {
//           0% { transform: translateX(0) translateY(0); }
//           100% { transform: translateX(40px) translateY(40px); }
//         }
//         @keyframes slide2 {
//           0% { transform: translateX(0) translateY(0); }
//           100% { transform: translateX(-30px) translateY(30px); }
//         }
//         @keyframes slide3 {
//           0% { transform: translateX(0) translateY(0); }
//           100% { transform: translateX(20px) translateY(-20px); }
//         }
//         .animate-slide-1 {
//           animation: slide1 20s linear infinite;
//         }
//         .animate-slide-2 {
//           animation: slide2 15s linear infinite;
//         }
//         .animate-slide-3 {
//           animation: slide3 25s linear infinite;
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav className="bg-white bg-opacity-10 backdrop-blur-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <span className="text-white text-xl font-bold">POS System</span>
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <button
//                   onClick={() => setShowLoginForm(true)}
//                   className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-colors"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => setShowSignupForm(true)}
//                   className="bg-white text-indigo-600 px-3 py-2 rounded-md hover:bg-opacity-90 transition-colors"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none"
//               >
//                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <button
//                 onClick={() => {
//                   setShowLoginForm(true);
//                   setIsOpen(false);
//                 }}
//                 className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md w-full text-left"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => {
//                   setShowSignupForm(true);
//                   setIsOpen(false);
//                 }}
//                 className="bg-white text-indigo-600 block px-3 py-2 rounded-md w-full text-left"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 text-center text-white">
//         <h1 className="text-6xl font-bold mb-6">Modern POS System</h1>
//         <p className="text-xl mb-12 max-w-2xl">
//           Streamline your business operations with our powerful and intuitive point of sale solution
//         </p>
//         <div className="space-x-6">
//           <button
//             onClick={() => setShowLoginForm(true)}
//             className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
//           >
//             Get Started
//           </button>
//           <button
//             onClick={() => setShowSignupForm(true)}
//             className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
//           >
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Forms */}
//       <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="text-white">Loading...</div>
//       </div>}>
//         {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
//         {showSignupForm && <SignupForm onClose={() => setShowSignupForm(false)} />}
//       </Suspense>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState, lazy, Suspense } from 'react';
import { ShoppingCart, BarChart, CreditCard, Users, Menu, X  } from 'lucide-react';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-800 to-red-700">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-slide-1" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                 backgroundSize: '40px 40px',
               }} />
          <div className="absolute inset-0 animate-slide-2" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                 backgroundSize: '30px 30px',
               }} />
          <div className="absolute inset-0 animate-slide-3"
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                 backgroundSize: '20px 20px',
               }} />
        </div>
      </div>

      <style>{`
        @keyframes slide1 {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(40px) translateY(40px); }
        }
        @keyframes slide2 {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-30px) translateY(30px); }
        }
        @keyframes slide3 {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(-20px); }
        }
        .animate-slide-1 {
          animation: slide1 20s linear infinite;
        }
        .animate-slide-2 {
          animation: slide2 15s linear infinite;
        }
        .animate-slide-3 {
          animation: slide3 25s linear infinite;
        }
      `}</style>

      {/* Navbar */}
      <nav className="bg-white bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">SwiftPOS</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <button
                  onClick={() => setShowLoginForm(true)}
                  className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignupForm(true)}
                  className="bg-white text-purple-800 px-3 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => {
                  setShowLoginForm(true);
                  setIsOpen(false);
                }}
                className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md w-full text-left"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowSignupForm(true);
                  setIsOpen(false);
                }}
                className="bg-white text-purple-800 block px-3 py-2 rounded-md w-full text-left"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Business</h1>
        <p className="text-xl mb-12 max-w-2xl">
          Streamline your operations, boost sales, and delight customers with our 
          powerful and intuitive POS solution.
        </p>
        <div className="space-x-6">
          <button
            onClick={() => setShowLoginForm(true)}
            className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105"
          >
            Get Started Free
          </button>
          <button
            onClick={() => setShowSignupForm(true)}
            className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

       {/* Hero Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Transform Your Business with
            <span className="text-indigo-600 block mt-2">Modern Point of Sale</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Streamline your operations, boost sales, and delight customers with our 
            powerful and intuitive POS solution.
          </p>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Free
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <CreditCard className="h-8 w-8" />,
              title: "Fast Checkout",
              description: "Process transactions quickly with our intuitive interface and smart payment options."
            },
            {
              icon: <BarChart className="h-8 w-8" />,
              title: "Real-time Analytics",
              description: "Get instant insights into your sales, inventory, and customer behavior."
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Customer Management",
              description: "Build lasting relationships with integrated CRM and loyalty programs."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-600 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "$1M+", label: "Daily Transactions" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-indigo-700 p-6 rounded-lg hover:bg-indigo-800 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Loading State */}
      {(showLoginForm || showSignupForm) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      )}
    </div>

    
  );
};

export default LandingPage;


