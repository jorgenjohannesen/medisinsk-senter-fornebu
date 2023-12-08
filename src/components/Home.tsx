export default function Home() {
  return (
    <div className="h-screen bg-secondary flex justify-center">
      <div className="text-5xl flex flex-col mt-28 gap-y-4 font-medium">
        <div className="text-primary flex">
          Velkommen til
          <span className="text-red ml-2">Medisinsk senter Fornebu</span>
        </div>
        <div className="text-primary flex">Hvordan kan vi hjelpe deg?</div>
      </div>
    </div>
  )
}
