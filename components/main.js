import Head from 'next/head'
import Nav from './nav'

const data = [
  {
    title: 'Woohoo!',
    badge: 'primary',
    src: 'https://picsum.photos/id/1002/400/250',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    title: 'Dude',
    badge: 'secondary',
    src: 'https://picsum.photos/id/1003/400/250',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'Stoked',
    badge: 'primary',
    src: 'https://picsum.photos/id/1004/400/250',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ',
  },
  {
    title: 'Yo Yo Yo',
    badge: 'primary',
    src: 'https://picsum.photos/id/1005/400/250',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
  },
]

export default function Main({ address }) {
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
