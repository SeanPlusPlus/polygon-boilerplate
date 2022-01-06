import Head from 'next/head'
import { useWeb3 } from "@3rdweb/hooks";
import Nav from './nav'

export default function Main() {
  const { address } = useWeb3();

  const data = [];

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

        <div className="grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="card card-bordered mb-4">
              <figure>
                <img src={item.src} />
              </figure> 
              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                  <div className={`badge mx-2 badge-${item.badge}`}>NEW</div>
                </h2> 
                <p className="pb-10">{item.description}</p> 
                <div className="justify-end card-actions">
                  <div className="absolute bottom-0 right-0 h-14 w-32 ...">
                    <button className="btn btn-secondary">More info</button>
                  </div>
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
