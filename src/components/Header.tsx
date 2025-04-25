import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const darkMode = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src="./../../public/meteo-logo.png"
            alt="meteo logo"
            className="h-50 w-50"
          />
        </Link>

        <div>
          {/* search */}
          {/* toggle theme */}
          <div
            onClick={() => setTheme(darkMode ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 ${darkMode ? "rotate-180" : "rotate-0"}`}
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
