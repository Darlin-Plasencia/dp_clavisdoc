import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import PasskeyModal from "@/components/PasskeyModal";

export default function Home({ searchParams }: SearchParamProps) {
  
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">

      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 ClavisDoc. Todos los Derechos Reservados.
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <div className="relative w-1/2 h-screen hidden lg:block">
        <Image
          src="/assets/images/onboarding-img2.jpg"
          alt="Onboarding Image"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
