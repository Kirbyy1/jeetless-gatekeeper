import SEO from "@/components/SEO";

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <SEO title="Jeetless — Strongest Holders" description="We do not tolerate jeets. Building the strongest holders. No jeetsallowed." />
      <section className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Jeetless</h1>
        <p className="text-sm text-muted-foreground">ca:xxxxx</p>
        <p className="text-lg leading-relaxed">
          {" we do not tolerate jeets. we are building the strongest holders. no jeetsallowed."}
        </p>
      </section>
    </main>
  );
};

export default Home;
