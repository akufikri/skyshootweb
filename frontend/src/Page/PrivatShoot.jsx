const PrivateShoot = () => {
      return (
            <>
                  <div className='pt-32 flex justify-center'>
                        <div className="max-w-2xl w-full">
                              <h1 className="text-xl font-medium text-center">Privat Shoot</h1>
                              <div className="border-2 p-4 rounded-md mt-4">
                                    <form action="">
                                          <div className="mb-3">
                                                <label htmlFor="" className="">Name</label>
                                                <input type="text" placeholder="Type here" className="input mt-2 input-bordered w-full" />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="" className="">Name</label>
                                                <select className="select select-bordered w-full">
                                                      <option disabled selected>Who shot first?</option>
                                                      <option>Han Solo</option>
                                                      <option>Greedo</option>
                                                </select>
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="" className="">Name</label>
                                                <input type="text" placeholder="Type here" className="input mt-2 input-bordered w-full" />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="" className="">Name</label>
                                                <input type="text" placeholder="Type here" className="input mt-2 input-bordered w-full" />
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      )
}
export default PrivateShoot