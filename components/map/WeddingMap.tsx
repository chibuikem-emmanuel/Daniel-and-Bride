"use client";

export default function WeddingMap() {
  return (
    <section
      id="venue"
      className="py-24 bg-[#0E1719] px-6 border-b border-[#8DD2DB]/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCC47] bg-[#8DD2DB]/10 px-4 py-1.5 rounded-full">
            Location Details
          </span>

          <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#FFFFFF] mt-4">
            The Venue
          </h2>
        </div>

        {/* Map Container */}
        <div className="w-full p-3 bg-[#44B6C5]/5 border border-[#8DD2DB]/20 rounded-3xl backdrop-blur-sm">
          <div className="w-full h-[450px] overflow-hidden rounded-2xl relative bg-white border border-[#8DD2DB]/20 shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=rhema%20university%20aba&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Wedding Venue Map"
            />

            <div className="absolute inset-0 border border-[#0E1719]/10 pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
