export default function Header() {

  const menuClass = 'self-center text-lg text-white hover:text-teal-600 cursor-pointer'

  return (
    <>
      <div className="flex w-screen bg-teal-500 justify-between px-20 h-16">
        <div className={menuClass}>Historia</div>
        <div className={menuClass}>Recetas</div>
        <div className={menuClass}>Todo sobre cocteleria</div>
        <div className={menuClass}>Contacto</div>
      </div>
    </>
  )
}