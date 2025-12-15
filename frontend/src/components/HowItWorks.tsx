import { FileText, Cpu, CheckCircle2, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Report an Issue",
    description: "Submit complaints via web, WhatsApp, or SMS. Include photos and location details."
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Auto-Classifies & Routes",
    description: "Our AI categorizes your complaint and routes it to the appropriate department instantly."
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Authority Resolves It",
    description: "Track real-time progress as authorities work to resolve the issue in your area."
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Citizens Validate & Earn",
    description: "Verify resolution, provide feedback, and earn civic points for your contribution."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From complaint to resolution in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl space-y-4">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 text-primary font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow indicator - Hidden on mobile and last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 transform rotate-45 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
