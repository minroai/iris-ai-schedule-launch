import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturesShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience Iris in Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Iris transforms your workflow with intelligent context and seamless collaboration
          </p>
        </div>

        <Tabs defaultValue="context" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-muted/30">
            <TabsTrigger value="context" className="text-lg py-4">
              Smart Context
            </TabsTrigger>
            <TabsTrigger value="sharing" className="text-lg py-4">
              Friend Sharing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="context" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Intelligent Tech Stack Integration</h3>
                <p className="text-lg text-muted-foreground">
                  Iris automatically connects with your existing tools and pulls context from your workflow. 
                  No more explaining your setup - Iris understands how you work best.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Seamlessly integrates with 50+ popular tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Automatically understands your work patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Provides intelligent suggestions based on context</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-muted/20 rounded-2xl border border-border/50 flex items-center justify-center">
                  {/* Placeholder for tech stack integration video */}
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Tech Stack Integration Video</p>
                    <p className="text-sm text-muted-foreground/70">Video placeholder - ready for your content</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-5 scale-105" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sharing" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <h3 className="text-3xl font-bold">Shared Calendars with Friends</h3>
                <p className="text-lg text-muted-foreground">
                  Connect with friends and colleagues through shared calendars. See each other's availability 
                  and coordinate seamlessly without the back-and-forth.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Add friends by email in seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Real-time calendar synchronization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Privacy controls for shared information</span>
                  </li>
                </ul>
              </div>
              <div className="relative lg:order-1">
                <div className="aspect-video bg-muted/20 rounded-2xl border border-border/50 flex items-center justify-center">
                  {/* Placeholder for friend sharing video */}
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Friend Sharing Feature Video</p>
                    <p className="text-sm text-muted-foreground/70">Video placeholder - ready for your content</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-5 scale-105" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesShowcase;