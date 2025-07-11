import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import React from "react";
export const dynamic = 'force-dynamic';


export default async function NewAppointment({params: { userId }} : SearchParamProps) {
    const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="Crear"
            userId={userId}
            patientId={patient.$id}
          />

            <p className="copyright mt-10 py-12">
              © 2025 ClavisDoc. Todos los Derechos Reservados.
            </p>
        </div>
      </section>

        <Image
          src="/assets/images/appointment3.jpg"
          alt="Appointment Image"
          height={1000}
          width={1000}
          className="side-img max-w-[390px] bg-bottom"
          priority
          quality={100}
        />
    </div>
  );
}
