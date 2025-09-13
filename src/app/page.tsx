"use client";

import HeroCarousel, { CarouselImage } from "@/components/HeroCarousel";
import StaffGrid from "@/components/StaffGrid";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "പ്രതിമാസ സമ്പാദ്യ പദ്ധതി",
    body: "We conduct about 30 monthly chits of worth Rs.55 lakhs",
    href: "/chit",
    img: "/image/chit.jpg",
  },
  {
    id: 2,
    title: "Loan",
    body: "Provide different types of loans against salary certificates & collateral",
    href: "/loan",
    img: "/image/loan.jpg",
  },
  {
    id: 3,
    title: "Deposits",
    body: "We accept deposits at attractive rates of interest",
    href: "/deposit",
    img: "/image/deposit.jpg",
  },
];

export default function Home() {
  const [images, setImages] = useState<CarouselImage[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/carousel");
      const data = await res.json();
      setImages(data);
    }
    fetchImages();
  }, []);
  return (
    <main className="font-sans">
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aided School Teachers' Society Thodupuzha
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-prose">
                Empowering teachers with trusted financial services, community
                support, and transparent governance for over three decades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-10 py-5 text-lg rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span className="flex items-center space-x-2">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 text-blue-600 shadow-lg hover:shadow-xl focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 group bg-white/10 backdrop-blur-10 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent"
              >
                <span className="flex items-center space-x-2">
                  <span>Contact us</span>
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <HeroCarousel images={images} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed specifically for
              educators, providing security, growth, and peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, index) => (
              <div
                key={s.id}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-4 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-slate-600">
                      {s.body}
                    </p>
                  </div>
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center w-full h-14 px-8 rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 group/btn"
                    aria-label={`Read more about ${s.title}`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Explore Service</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="mission"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Guided by our core values, we strive to create lasting impact in
              the education community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="p-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 m-0">
                    Our Mission
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed text-slate-600">
                      Deliver reliable, teacher-first financial services
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed text-slate-600">
                      Provide fair credit and transparent processes
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed text-slate-600">
                      Strengthen community welfare and support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="p-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 m-0">
                    Our Vision
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed text-slate-600">
                      Be the most trusted co‑operative for teachers
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed text-slate-600">
                      Lead with integrity, service quality, and innovation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed text-slate-600">
                      Make a measurable social impact in education
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Promo + Map */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Get Our Mobile App
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-slate-600">
                  Experience faster, more convenient access to all our services
                  with our dedicated mobile application.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mscore.thodupuzha_astcb&pcampaignid=web_share"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 group"
                  >
                    <span className="flex items-center space-x-3">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span>Download on Play Store</span>
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 text-blue-600 shadow-lg hover:shadow-xl focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 group bg-white/10 backdrop-blur-10 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Contact Office</span>
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">
                      Balance & Transactions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">
                      Loan Information
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">
                      Chit Auction Updates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Secure & Easy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Location
              </h3>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="aspect-[16/9] md:aspect-[4/3]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.0868440827144!2d76.71036169307656!3d9.89259173208327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c59c191a89a9%3A0xd7b624983d7350cb!2steachers%20scociety%20thodupuzha!5e0!3m2!1sen!2sin!4v1731233683169!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Three decades of dedicated service to the education community,
              building trust through transparency and innovation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group text-center">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-white">30+</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Years of Service
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    Serving the education community since 1981
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group text-center">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-white">A</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Audit Grade
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    Class I Special Grade Co-operative Society
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group text-center">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-white">₹55L</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Monthly Chits
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    Conducting 30 monthly chits worth ₹55 lakhs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="p-10 space-y-6">
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed text-slate-600">
                    Thodupuzha Taluk Aided School Teachers' Cooperative Society
                    Limited No. I-145. Registered as Employees Credit
                    Cooperative Society under Kerala Co-op. Societies Act 1969,
                    on 2nd November 1981. The area of business of the society is
                    in Thodupuzha taluk. Teachers of aided schools falling under
                    this area can become "A" class member of this society.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-slate-600">
                    The head office of the society is situated at Thodupuzha
                    Kothaikunnu Bypass. It is a 'Class I Special Grade'
                    Co-operative Society with an audit classification of "A". We
                    accept deposits at attractive rates of interest, provide
                    different types of loans against salary certificates &
                    collateral, and conduct about 30 monthly chits of worth
                    Rs.55 lakhs.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-slate-600">
                    We implemented all available modern facilities to help our
                    customers. (SMS alert on all transactions, mobile banking,
                    RTGS, NEFT, website, online chit auctions, CCTV
                    surveillance, Cloud back ups etc.) It helps our customers
                    transact more effectively. Teachers' Society has been fully
                    computerized. Our society has safe deposit locker facility.
                    This society has been running for profit for the past 30
                    years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Staffs - second last section */}
      <section
        id="staff"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Meet our dedicated team of professionals who work tirelessly to
              serve the education community with excellence and care.
            </p>
          </div>
          <div className="mt-8">
            <StaffGrid />
          </div>
        </div>
      </section>

      {/* Download Forms */}
      <section
        id="download"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Download Forms
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Access all necessary forms and documents for our services.
              Download, fill, and submit for faster processing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "MBS form", href: "/Forms/output.pdf" },
              { title: "Income Tax form", href: "/Forms/output2.pdf" },
              {
                title: "A Class Membership Form",
                href: "/Forms/A Class Membership Form.pdf",
              },
              {
                title: "Cash Credit Application",
                href: "/Forms/Cash Credit Application.pdf",
              },
              { title: "RTGS-NEFT Form", href: "/Forms/RTGS-NEFT Form.pdf" },
              {
                title: "Satharana Vaypakkulla Apeksha",
                href: "/Forms/Satharana Vaypakkulla Apeksha-1.pdf",
              },
              {
                title: "Satharana Vaypakkulla(above 10 lac)",
                href: "/Forms/Satharana Vaypakkulla Apeksha-2.pdf",
              },
              { title: "Short Term Loan", href: "/Forms/Short Term Loan.pdf" },
            ].map((d, index) => (
              <div
                key={d.title}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 space-y-6">
                  <div className="relative h-16 w-16 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"></div>
                    <Image
                      src="/image/pdficon.png"
                      alt="PDF"
                      fill
                      sizes="64px"
                      className="relative object-contain p-3"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {d.title}
                  </h3>

                  <a
                    href={d.href}
                    download
                    className="inline-flex items-center justify-center w-full h-12 px-6 rounded-2xl font-semibold transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50 transform hover:-translate-y-1 hover:scale-105 group/btn"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Download</span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - last content section before footer */}
      <section
        id="contact"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              Get in touch with us for any inquiries, support, or to learn more
              about our services. We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Address</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p className="text-base md:text-lg leading-relaxed">
                    Thodupuzha taluk aided School
                    <br />
                    Teachers co-operative society,
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Kothaikunne Bypass,
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Opposite kair baby shop.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-semibold">
                    Pin Code: 685584
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-semibold">
                    City: Thodupuzha
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Contact Details
                  </h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-base md:text-lg leading-relaxed">
                      Phone: 8547852051
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-base md:text-lg leading-relaxed">
                      Tel: 04862 222051
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <a
                      href="mailto:tdpapvtschoolteacherscoop@gmail.com"
                      className="text-base md:text-lg leading-relaxed text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
                    >
                      tdpapvtschoolteacherscoop@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-base md:text-lg leading-relaxed font-medium">
                      Monday - Friday
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      11:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-base md:text-lg leading-relaxed font-medium">
                      Saturday
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-base md:text-lg leading-relaxed font-medium">
                      Sunday
                    </span>
                    <span className="text-base md:text-lg leading-relaxed text-slate-400">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
