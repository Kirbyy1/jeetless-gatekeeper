import SEO from "@/components/SEO";

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO title="Jeetless — Strongest Holders" description="We do not tolerate jeets. Building the strongest holders. No jeetsallowed." />

      <header className="w-full">
        <div className="container mx-auto p-4">
          <div className="relative">
            <img
              src="/lovable-uploads/93b21afe-b83b-4f2f-b1c7-4aef5d108cc4.png"
              alt="Jeetless banner"
              className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/lovable-uploads/cef7ea7a-cc98-4a86-8727-9344a781fc42.png"
                alt="Jeetless logo"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full ring-2 ring-ring bg-background/80 p-1"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto max-w-4xl px-6 py-8 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Jeetless</h1>
        <p className="text-sm text-muted-foreground">ca:xxxxx</p>
        <p className="text-lg leading-relaxed">{" we do not tolerate jeets. we are building the strongest holders. no jeetsallowed."}</p>
      </section>

      <section aria-label="Jeetless characters" className="container mx-auto max-w-4xl px-6 pb-10">
        <div className="flex items-end justify-between gap-6">
          <img
            src="/lovable-uploads/34b7a2c6-4f43-422d-9d22-ab8e2729a736.png"
            alt="Illustration of a confident holder"
            className="max-h-64 sm:max-h-72 object-contain"
            loading="lazy"
          />
          <img
            src="/lovable-uploads/3f4d366c-7762-41e9-a511-e4fa31e3fd0d.png"
            alt="Illustration symbolizing panic seller"
            className="max-h-64 sm:max-h-72 object-contain"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
