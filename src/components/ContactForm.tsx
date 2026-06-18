"use client";
import React from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error);

      toast({
        title: t.contactForm.successTitle,
        description: t.contactForm.successDesc,
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });

      setFullName("");
      setEmail("");
      setMessage("");

      setTimeout(() => { router.push("/"); }, 1000);
    } catch (error) {
      toast({
        title: t.contactForm.errorTitle,
        description: t.contactForm.errorDesc,
        variant: "destructive",
        className: cn("top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">{t.contactForm.fullName}</Label>
          <Input
            id="fullname"
            placeholder={t.contactForm.namePlaceholder}
            type="text"
            required
            disabled={loading}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">{t.contactForm.emailAddress}</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            required
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>

      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">{t.contactForm.message}</Label>
        <Textarea
          id="content"
          placeholder={t.contactForm.messagePlaceholder}
          required
          disabled={loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">{t.contactForm.privacy}</p>
      </div>

      <Button
        disabled={loading}
        type="submit"
        className="relative w-full h-10 font-medium text-white rounded-md bg-gradient-to-br from-black to-neutral-700 dark:from-zinc-900 dark:to-zinc-800 shadow-md group/btn"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contactForm.sending}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {t.contactForm.send} <ChevronRight className="w-4 h-4 ml-3" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px h-px w-full opacity-0 group-hover/btn:opacity-100 transition bg-gradient-to-r from-transparent via-brand to-transparent" />
    <span className="absolute inset-x-10 -bottom-px h-px w-1/2 mx-auto opacity-0 blur-sm group-hover/btn:opacity-100 transition bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
  </>
);
