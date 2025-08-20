import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      name: "Basic Clean",
      price: "$59",
      description: "Perfect for regular maintenance",
      features: [
        "Exterior wash",
        "Interior vacuum",
        "Window cleaning",
        "Tire shine"
      ],
      popular: false
    },
    {
      name: "Complete Detail",
      price: "$149",
      description: "Comprehensive interior & exterior",
      features: [
        "Everything in Basic",
        "Paint correction",
        "Leather conditioning",
        "Engine bay cleaning",
        "6-month protection"
      ],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "$299",
      description: "Ultimate protection & shine",
      features: [
        "Everything in Complete",
        "Ceramic coating",
        "Paint protection film",
        "12-month warranty",
        "Priority booking"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-automotive-blue mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Professional quality at competitive prices. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`bg-white rounded-xl p-8 ${
                plan.popular 
                  ? 'shadow-xl border-2 border-automotive-gold relative' 
                  : 'shadow-lg border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-automotive-gold text-automotive-blue px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-automotive-light mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-automotive-blue mb-4">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-automotive-blue mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToBooking}
                  className={`w-full py-3 rounded-md font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-automotive-gold hover:bg-yellow-500 text-automotive-blue'
                      : 'bg-automotive-blue hover:bg-automotive-light text-white'
                  }`}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
