import MainLayout from "@/app/components/layout/MainLayout";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FeaturesPage() {
  return (
    <MainLayout>
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              Powerful Features for Modern Design
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to create stunning dark mode interfaces
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <Image
                  src={`https://picsum.photos/400/300?random=${index}`}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

const features = [
  {
    title: "Theme Builder",
    description: "Create and customize dark themes with ease",
    benefits: [
      "Custom color palettes",
      "Real-time preview",
      "Export to multiple formats",
    ],
  },
  {
    title: "Component Library",
    description: "Pre-built dark mode components",
    benefits: [
      "Responsive layouts",
      "Accessible components",
      "Custom styling options",
    ],
  },
  {
    title: "Design System",
    description: "Maintain consistent design across projects",
    benefits: ["Typography system", "Spacing scales", "Color management"],
  },
  // Add more features as needed
];
