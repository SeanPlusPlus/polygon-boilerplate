import Head from 'next/head'
import { useWeb3 } from "@3rdweb/hooks";
import Nav from './nav'

export default function Main() {
  const { address } = useWeb3();

  const data = [
    {
      address: 'f727',
      message: 'stoked',
    }
  ];

  return (
    <div>
      <Head>
        <title>Web3 Boilerplate</title>
        <meta name="description" content="SeanPlusPlus NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav address={address} />

      <main className="md:container md:mx-auto px-2">
        <h1 className="text-4xl font-bold mb-4 mt-4">
          Hello world!
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
          {data.map((item, idx) => (
            <div key={idx} className="card shadow-lg compact side bg-base-100">
              <div className="flex-row items-center space-x-4 card-body">
                <div className="flex-1">
                  <h2 className="card-title">{item.address}</h2>
                  <p className="text-base-content text-opacity-40">
                    {item.message}
                  </p>
                </div>
                <div className="flex-0">
                  <button className="btn btn-sm">Follow</button>
                </div>
              </div>
            </div> 
          ))}
        </div>
      </main>

      <footer className="text-center pb-10 pt-10">
        <a
          href="https://twitter.com/SeanPlusPlus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by SeanPlusPlus
        </a>
      </footer>
    </div>
  )
}
