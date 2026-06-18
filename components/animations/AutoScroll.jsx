"use client";

export default function AutoScroll({
  children,
  speed = "40s"
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6 animate-marquee"
        style={{
          animationDuration: speed
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
