import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";

const Register = async ({ params: {userId} }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user}/>

          <p className="copyright py-12">
            © 2025 ClavisDoc. Todos los Derechos Reservados.
          </p>
        </div>
      </section>
        <Image
          src="/assets/images/register3.jpg"
          alt="Register Image"
          height={1000}
          width={1000}
          className="side-img max-w-[390px]"
          priority
          quality={100}
        />
    </div>
  );
};

export default Register;
