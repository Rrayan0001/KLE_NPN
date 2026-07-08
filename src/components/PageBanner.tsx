export default function PageBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#3a1d64] to-[#4e2b85] py-8 text-center border-b border-[#b28f4d]/30 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg sm:text-2xl font-serif text-[#ffeb3b] tracking-wider uppercase font-semibold leading-tight">
          G.I. Bagewadi Arts, Science & Commerce College, Nipani
        </h2>
        <p className="text-[9px] sm:text-[11px] text-gray-300 uppercase tracking-widest mt-1 font-bold">
          Accredited at &apos;A&apos; Grade with 3.10 CGPA in 4th Cycle by NAAC
        </p>
      </div>
    </div>
  );
}
