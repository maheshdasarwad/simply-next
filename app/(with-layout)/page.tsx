'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import {
  ArrowUp,
  Users as UsersIcon,
  ArrowRight,
  Layers,
  Shield,
  Clock,
  TrendingUp,
  FileText,
} from 'lucide-react';

export default function HomePage() {
  const { theme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
    {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(to bottom right, #1e293b, #020617)'
              : 'linear-gradient(to bottom right, #1d4ed8, #172554)',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/HomePage.png')",
            opacity: theme === 'dark' ? 0.3 : 0.4,
          }}
        ></div>
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 to-transparent"></div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Various Programs <span className="text-orange-300">At Your Fingertips</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Navigate scholarships, welfare schemes, and government programs with ease - all
                in one place, designed for the citizens of India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="#services"
                  className="px-6 py-3 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                  style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}
                >
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
                <Link
                  href="#features"
                  className="px-6 py-3 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                  style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}
                >
                  <span className="relative z-10">Why Choose Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Simply Saral Works Section */}
      <section
        id="services"
        className="py-20 relative overflow-hidden"
        style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(to bottom right, #0f1e36, #162749, #1e2f4a)' // same as screenshot
                  : 'radial-gradient(ellipse 140% 115% at 50% 100%, #2563eb77 0%, #539bf977 50%, #2563eb33 75%, #ffffff 100%)',
              zIndex: 1,
            }}>
        <div
          className="absolute inset-0 opacity-20 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
              style={{
                color: theme === 'dark' ? '#60A5FA' : '#1d4ed8',
                letterSpacing: '-.03em',
              }}
            >
              How Simply Saral Works
            </h2>
            <p
              className="text-xl mt-5 font-medium"
              style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
            >
              Get started in just four simple steps.
            </p>
          </div>

          {/* Steps */}
          <div className="relative flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-center mb-12">
            {[
              {
                icon: <UsersIcon className="w-8 h-8" />,
                color: 'from-blue-400 to-blue-600',
                title: 'Create Account',
                desc: 'Quick and secure registration.',
              },
              {
                icon: <Layers className="w-8 h-8" />,
                color: 'from-green-400 to-teal-500',
                title: 'Browse Schemes',
                desc: 'Explore 20+ schemes by category.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                color: 'from-amber-400 to-orange-500',
                title: 'Check Eligibility',
                desc: 'See which schemes match your profile.',
              },
              {
                icon: <FileText className="w-8 h-8" />,
                color: 'from-pink-400 to-rose-500',
                title: 'Apply Online',
                desc: 'Submit applications with ease.',
              },
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div
                  className="relative flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
                  style={{ zIndex: 1 }}
                >
                  <div
                    className={`w-16 h-16 flex items-center justify-center mb-3 rounded-full shadow-lg bg-gradient-to-br ${step.color}`}
                    style={{
                      boxShadow:
                        theme === 'dark'
                          ? '0 4px 14px 2px #2563eb50'
                          : '0 6px 24px 1px #93c5fd30',
                      border:
                        theme === 'dark' ? '2px solid #334155' : '2px solid #dbeafe',
                      transition: 'box-shadow 0.3s',
                    }}
                  >
                    {React.cloneElement(step.icon, {
                      className: 'w-7 h-7',
                      color: '#fff',
                    })}
                  </div>
                  <div
                    className="text-xl font-bold mt-1"
                    style={{ color: theme === 'dark' ? '#fff' : '#111827' }}
                  >
                    {step.title}
                  </div>

                  <div
                      className="mt-2 text-center max-w-[230px]"
                      style={{
                        color: theme === 'dark' ? '#d1d5db' : '#2563eb',
                        fontWeight: 500,
                      }}
                    >
                      {step.desc}
                  </div>

                </div>
                {idx !== arr.length - 1 && (
                  <div
                    className="hidden md:block flex-1 h-2 border-b-2 border-dashed border-blue-300 dark:border-blue-800 mx-2"
                    aria-hidden="true"
                    style={{ minWidth: 40, maxWidth: 130 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/schemes"
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-lg shadow-md transition hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(90deg, #2563eb 50%, #1e40af 100%)',
                letterSpacing: '0.02em',
              }}
            >
              Explore All Schemes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f9fafb' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: theme === 'dark' ? 0.15 : 0.5,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ color: theme === 'dark' ? '#60a5fa' : '#1d4ed8' }}
              >
                Why Choose Simply Saral?
              </h2>
              <ul className="space-y-8">
                <FeatureItem
                  theme={theme}
                  icon={<Layers className="w-6 h-6" />}
                  title="One Platform, Multiple Services"
                  description="Access all government schemes and services through a single, unified platform without navigating multiple websites."
                />
                <FeatureItem
                  theme={theme}
                  icon={<Shield className="w-6 h-6" />}
                  title="Secure & Reliable"
                  description="Your personal information is protected with enterprise-grade security measures ensuring complete data privacy."
                />
                <FeatureItem
                  theme={theme}
                  icon={<Clock className="w-6 h-6" />}
                  title="Time-Saving Process"
                  description="Streamlined application processes reduce paperwork and save valuable time when applying for government services."
                />
                <FeatureItem
                  theme={theme}
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="Real-Time Status Tracking"
                  description="Track your application status in real-time and receive timely updates on approvals and next steps."
                />
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Features"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg transform hover:-translate-y-1 transition-all duration-300 z-50"
          style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

// Feature Item Component
function FeatureItem({
  theme,
  icon,
  title,
  description,
}: {
  theme: 'light' | 'dark';
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(96, 165, 250, 0.2)' : '#dbeafe',
          boxShadow: theme === 'dark' ? '0 4px 6px rgba(96, 165, 250, 0.2)' : 'none',
        }}
      >
        <div style={{ color: theme === 'dark' ? '#93c5fd' : '#1d4ed8' }}>{icon}</div>
      </div>
      <div>
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
        >
          {title}
        </h3>
        <p style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}>{description}</p>
      </div>
    </li>
  );
}