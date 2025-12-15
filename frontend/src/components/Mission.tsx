import { Heart, Target, Users2 } from "lucide-react";

const Mission = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between citizens and governance through technology, transparency, and accountability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Citizen-First</h3>
              <p className="text-muted-foreground">
                Empowering every citizen with a voice that matters and tools that work.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mx-auto shadow-lg shadow-secondary/30">
                <Target className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Accountability</h3>
              <p className="text-muted-foreground">
                Ensuring government transparency and measurable outcomes for every complaint.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                <Users2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community</h3>
              <p className="text-muted-foreground">
                Building stronger cities through collective action and shared responsibility.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 sm:p-12 border border-border/50 shadow-xl">
            <div className="space-y-6 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-foreground">
                Why CivicLens Exists
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Too often, civic complaints fall into a void—filed but forgotten, acknowledged but unresolved. 
                CivicLens changes that narrative by leveraging AI and real-time tracking to ensure every issue 
                gets the attention it deserves.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe in a future where technology bridges the gap between citizens and their governments, 
                where transparency is the norm, and where every voice contributes to building better, more 
                livable cities.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">Join us in making cities smarter and more responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
