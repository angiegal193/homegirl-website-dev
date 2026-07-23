"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

/**
 * The single responsive boundary shared by every story page.
 *
 * Until a page's mobile artwork is ready, omit `mobile` and the desktop
 * composition remains visible at every size. Supplying `mobile` later switches
 * only the rendered composition; routes and hosting stay exactly the same.
 */
export default function ResponsivePage({
  desktop,
  mobile,
  mobileQuery = "(max-width: 820px)",
}: {
  desktop: ReactNode;
  mobile?: ReactNode;
  mobileQuery?: string;
}) {
  const [useMobile, setUseMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mobileQuery);
    const update = () => setUseMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [mobileQuery]);

  return useMobile && mobile ? mobile : desktop;
}
