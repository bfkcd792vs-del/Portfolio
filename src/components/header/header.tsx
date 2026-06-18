"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { useLanguage } from "@/contexts/language";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{ background: "transparent" }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md">
            {config.author}
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <FunnyThemeToggle className="w-6 h-6 hidden md:flex" />
          <div className="flex items-center border border-border rounded-md overflow-hidden text-sm font-mono">
            <button
              onClick={() => setLang("fr")}
              className={cn(
                "px-3 py-1 transition-colors",
                lang === "fr"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1 transition-colors",
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
