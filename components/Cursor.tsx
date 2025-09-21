// File: components/Cursor.tsx
// -----------------------------
// 'use client';
// import { useEffect, useRef } from 'react';

// // Custom cursor with trailing dot and hover scaling for interactive elements.
// export default function Cursor() {
//   const dotRef = useRef<HTMLDivElement | null>(null);
//   const outlineRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       const x = e.clientX;
//       const y = e.clientY;
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//       }
//       if (outlineRef.current) {
//         // slight smoothing for outer ring
//         outlineRef.current.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
//       }
//     };

//     const enterInteractive = () => {
//       if (outlineRef.current) outlineRef.current.style.transform += ' scale(1.8)';
//     };
//     const leaveInteractive = () => {
//       if (outlineRef.current) outlineRef.current.style.transform = outlineRef.current.style.transform.replace(' scale(1.8)', '');
//     };

//     document.addEventListener('mousemove', move);
//     document.querySelectorAll('a, button, input, textarea').forEach((el) => {
//       el.addEventListener('mouseenter', enterInteractive);
//       el.addEventListener('mouseleave', leaveInteractive);
//     });

//     return () => {
//       document.removeEventListener('mousemove', move);
//       document.querySelectorAll('a, button, input, textarea').forEach((el) => {
//         el.removeEventListener('mouseenter', enterInteractive);
//         el.removeEventListener('mouseleave', leaveInteractive);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div ref={outlineRef} className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-ws-cerise/40 transform transition-transform duration-150" />
//       <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full bg-ws-cerise shadow-lg transform -translate-x-1/2 -translate-y-1/2" />
//     </>
//   );
// }




'use client';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full fintech-gradient opacity-40 blur-xl z-50 transition-transform duration-150"
      style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)` }}
    />
  );
}
