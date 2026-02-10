import Link from "next/link";

const AreaServed = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Serving Patients from <span className="text-cyan-600">Magarpatta</span> and Nearby Areas
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Glaze Dental Clinic provides advanced dental care to patients from Magarpatta, Amanora Park Town, Kharadi, and surrounding areas. Our clinic is easily accessible for residents and professionals looking for quality{" "}
          <Link href="/services/root-canal-treatment" className="text-cyan-600 font-medium hover:text-cyan-700 underline decoration-cyan-200 underline-offset-2">
            root canal treatment
          </Link>
          ,{" "}
          <Link href="/services/dental-implants" className="text-cyan-600 font-medium hover:text-cyan-700 underline decoration-cyan-200 underline-offset-2">
            dental implants
          </Link>
          ,{" "}
          <Link href="/services/orthodontics-braces" className="text-cyan-600 font-medium hover:text-cyan-700 underline decoration-cyan-200 underline-offset-2">
            braces
          </Link>
          , and{" "}
          <Link href="/services" className="text-cyan-600 font-medium hover:text-cyan-700 underline decoration-cyan-200 underline-offset-2">
            smile designing
          </Link>
          {" "}near Magarpatta. Whether you need a routine checkup or specialised treatment, our team offers painless dentistry and modern technology in Hadapsar, with convenient reach for Pune&apos;s eastern corridor.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
        >
          View all dental services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default AreaServed;
