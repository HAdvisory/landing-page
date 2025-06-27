import { useEffect, useState } from "react";

function useScrollColor(colorMap) {
  const [bgColor, setBgColor] = useState(colorMap[0].color);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Find the last matching range
      for (let i = colorMap.length - 1; i >= 0; i--) {
        if (scrollY >= colorMap[i].scrollY) {
          setBgColor(colorMap[i].color);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [colorMap]);

  return bgColor;
}

export default useScrollColor;
