export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="header flex justify-between items-center h-28 py-0 px-[var(--space-1)] border-b border-[#ced2d9] z-10 bg-white fixed top-0 left-0 right-0">
        <div className="flex items-center ml-8">
          <img className="h-20 mr-4" src="logo.png" />
          <div className="flex flex-col">
            <div>Medisinsk</div>
            <div>Senter</div>
            <div>Fornebu</div>
          </div>
        </div>
        <div className="flex flex-row space-x-9 text-xl">
          <div>Hjem</div>
          <div>Tjenester</div>
          <div>Ansatte</div>
          <div>Kontakt</div>
        </div>
        <div className="mr-8"> {} </div>
      </header>
      <main>{children}</main>
      <footer className="footer bg-secondary h-28">
        <div className="flex justify-around items-center h-full w-full px-4">
          <div>
            <strong>Åpningstider</strong>: Mandag - Fredag 08:00 - 15:30
          </div>
          <div>
            <strong>Telefon</strong>: +47 675 90 636
          </div>
          <div>
            <strong>Adresse</strong>: Forneburingen 209, 1364 Fornebu
          </div>
        </div>
      </footer>
    </div>
  )
}
