"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DatabasePreview } from "@/components/sections/DatabasePreview";
import { FrameworkLogos } from "@/components/sections/FrameworkLogos";
import { TechnicalSpecs } from "@/components/sections/TechnicalSpecs";
import { Benchmarks } from "@/components/sections/Benchmarks";
import { CustomerStories } from "@/components/sections/CustomerStories";
import { InfrastructurePartners } from "@/components/sections/InfrastructurePartners";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />

      {/* Feature Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      <DatabasePreview />

      {/* Framework Support */}
      <section className="py-24 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Use Supabase with any framework
          </h2>
          <FrameworkLogos />
        </div>
      </section>

      <TechnicalSpecs />
      <Benchmarks />

      {/* Infrastructure Partners */}
      <InfrastructurePartners />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Customer Stories */}
      <CustomerStories />

      {/* Community Section */}
      <CommunitySection />

      <Footer />
    </div>
  );
}
