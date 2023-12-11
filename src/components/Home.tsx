import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="h-screen bg-secondary flex flex-col">
      <div className="mt-32">
        <div className="text-5xl mb-20 font-medium text-primary self-start w-full px-40">
          <div>
            Velkommen til{' '}
            <span className="text-red">Medisinsk senter Fornebu</span>
          </div>
          <div className="mt-6">Hvordan kan vi hjelpe deg?</div>
        </div>
        <div className="flex gap-12 w-full px-40 mb-12">
          <a
            href="https://helsenorge.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex-1"
          >
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center">
                  <img
                    className="h-12 mr-8"
                    src="/calender-outline.svg"
                    alt="calender"
                  />
                  <CardTitle>Bestill time</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </a>
          <a
            href="https://helsenorge.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex-1"
          >
            <Card>
              <CardHeader className="flex flex-row items-center">
                <img
                  className="h-12 mr-8"
                  src="/document-pill.svg"
                  alt="document"
                />
                <CardTitle>Forny resept</CardTitle>
              </CardHeader>
            </Card>
          </a>
          <a
            href="https://helsenorge.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex-1"
          >
            <Card>
              <CardHeader className="flex flex-row items-center">
                <img
                  className="h-12 mr-8"
                  src="/customer-service.svg"
                  alt="document"
                />
                <CardTitle>Start e-konsultasjon</CardTitle>
              </CardHeader>
            </Card>
          </a>
        </div>
      </div>
    </div>
  )
}
