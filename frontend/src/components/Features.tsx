import { Brain, BarChart3, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Categorization",
    description: "Smart algorithms automatically classify and route complaints to the right department, ensuring faster response times."
  },
  {
    icon: BarChart3,
    title: "Real-Time Transparency",
    description: "Track your complaint status live and see how authorities are addressing issues in your community."
  },
  {
    icon: Clock,
    title: "Automated Escalation",
    description: "Unresolved complaints automatically escalate to higher authorities, ensuring accountability at every level."
  },
  {
    icon: Award,
    title: "Community Validation & Rewards",
    description: "Earn points for reporting and validating issues. Build a reputation as an engaged citizen."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose CivicLens?
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced technology meets civic responsibility. Our platform ensures your voice is heard and acted upon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
