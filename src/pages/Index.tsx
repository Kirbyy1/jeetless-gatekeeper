import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PHRASE = "do not reedem it";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleVerify = () => {
    const valid = value.trim() === PHRASE;
    if (!valid) {
      toast({ title: "Verification failed", description: "Please type the phrase exactly as shown." });
      return;
    }
    localStorage.setItem("jeetless_verified", "true");
    toast({ title: "Verified", description: "Welcome to Jeetless." });
    setOpen(false);
    navigate("/home");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <SEO title="Jeetless — Prove you are not a jeet" description="Simple verification to enter Jeetless." />
      <section className="text-center space-y-6 p-6">
        <h1 className="text-4xl font-bold tracking-tight">Jeetless</h1>
        <p className="text-muted-foreground">Prove you are not a jeet to continue</p>
        <Button variant="default" onClick={() => setOpen(true)}>Prove you are not a jeet</Button>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Type the phrase exactly</DialogTitle>
            <DialogDescription>Enter the text from the image to continue.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="border rounded-md p-3 text-center select-none">
              <img
                src="/lovable-uploads/a3e0d296-1c6b-4987-b782-bd0442ef35a0.png"
                alt="Captcha phrase: do not reedem it"
                className="mx-auto max-h-20 object-contain"
                loading="lazy"
              />
            </div>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type it here"
              aria-label="Verification input"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleVerify();
              }}
            />
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleVerify}>Verify</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
