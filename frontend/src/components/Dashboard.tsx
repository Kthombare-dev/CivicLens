import dashboardImage from "@/assets/dashboard-mockup.jpg";
import { TrendingUp, MapPin, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Public Dashboard & Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time transparency into civic issues and government accountability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 hover:shadow-primary/10 transition-shadow">
              <img 
                src={dashboardImage} 
                alt="CivicLens dashboard showing analytics and metrics" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border/50 backdrop-blur-sm hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Resolution Rate</div>
                  <div className="text-lg font-bold text-foreground">85%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-foreground">Interactive Heat Maps</h3>
                  <p className="text-muted-foreground">
                    Visualize complaint hotspots across your city. See which areas need the most attention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-foreground">Category Analytics</h3>
                  <p className="text-muted-foreground">
                    Track trends by complaint type. Understand which civic issues are most pressing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-foreground">Community Impact</h3>
                  <p className="text-muted-foreground">
                    See how citizen engagement drives real change. Monitor resolution times and government response.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-civic-teal-light/20 rounded-xl p-6 border border-primary/20">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-primary">Real-Time Updates</div>
                <div className="text-foreground">
                  Track live complaint status, authority responses, and resolution progress all in one place.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
