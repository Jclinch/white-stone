import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-xl text-white">
            {/* Logo with white outline */}
            <div className="inline-block rounded-md p-1 bg-slate-900">
              <Image
                src="/WS-logo.png"
                alt="White Stone Corp Logo"
                width={120}
                height={50}
                className="object-contain bg-white"
                priority
              />
            </div>
            {/* White Stone Corp */}
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Building the infrastructure for compliant global payments.
          </p>
        </div>
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} White Stone Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
