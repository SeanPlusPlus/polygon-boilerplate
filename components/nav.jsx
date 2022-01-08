export default function Nav({ address }) {
  const addr = address.substring(address.length - 4)
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-none hidden lg:flex">
      </div> 
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <span className="text-lg font-bold">
          Web3 Boilerplate
        </span>
      </div> 
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded h-12 m-1">
            <button className="btn btn-info">
              <div className="m-auto">
                {addr}
              </div>
            </button> 
          </div>
        </div>
      </div>
    </div>
  )
}