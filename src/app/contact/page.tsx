import BackButton from "@/components/back-button";

export default function ContactPage() {
  return (
    <>
      <BackButton />
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-white rounded-lg shadow-lg'>
          <div className='p-4'>
            <h2 className='text-2xl font-bold text-gray-800'>Contacto</h2>
            <p>
              <strong>Correo</strong>
            </p>
            <p className='mt-2 text-gray-600'></p>
            <p>
              <strong>Telefono</strong>
            </p>
            <p className='flex flex-col'></p>
            <p>
              <strong>Direccion</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
