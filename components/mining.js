export default function Mining() {
  return (
    <div className="card shadow-lg compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="flex-1">
          <h3 className="card-title">
            Mining
          </h3>
          <div className="float-left mb-2 mt-3">
            <div className="mining">
              <span role="img" aria-label="waiting">⏳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}