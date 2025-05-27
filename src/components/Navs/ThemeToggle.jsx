import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from 'react-bootstrap';
import { Moon, Sun } from 'lucide-react';
import MobileNav from './MobileNav';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <>
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      style={{ width: '36px', height: '36px', padding: 0 }}
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </Button>

    <MobileNav />
    </>
  );
};

export default ThemeToggle;
