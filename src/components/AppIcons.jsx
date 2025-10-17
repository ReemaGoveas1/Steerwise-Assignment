import React from "react";
import { createIcon } from "lucide-react";

/** |< Skip to Start */
export const SkipToStart = createIcon({
  displayName: "SkipToStart",
  viewBox: "0 0 24 24",
  defaultProps: {
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    className: "w-6 h-6",
  },
  path: (
    <>
      {/* Vertical line */}
      <line x1="3" y1="3" x2="3" y2="21" strokeLinecap="round" />
      {/* Left arrow */}
      <polyline points="10,6 3,12 10,18" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

/** >| Skip to End */
export const SkipToEnd = createIcon({
  displayName: "SkipToEnd",
  viewBox: "0 0 24 24",
  defaultProps: {
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    className: "w-6 h-6",
  },
  path: (
    <>
      {/* Right arrow */}
      <polyline points="14,6 21,12 14,18" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Vertical line */}
      <line x1="21" y1="3" x2="21" y2="21" strokeLinecap="round" />
    </>
  ),
});