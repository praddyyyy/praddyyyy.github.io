"use client";

import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-[2rem] right-[3rem]">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant="outline"
        size="icon"
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}

export default ThemeChanger;
