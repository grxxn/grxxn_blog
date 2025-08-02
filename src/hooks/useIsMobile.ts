import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleCheckSize = () => setIsMobile(window.innerWidth < 400);
    handleCheckSize()

    window.addEventListener("resize", handleCheckSize);
    return () => window.removeEventListener("resize", handleCheckSize);
  }, [])

  return isMobile;
};