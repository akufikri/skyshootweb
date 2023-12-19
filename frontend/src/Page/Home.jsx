import Galleri from "./Galleri";
const Home = () => {
      return (
            <div>
                  <div className="hero min-h-screen ">
                        <div className="hero-content sm:text-center">
                              <div className="sm:max-w-full">
                                    <h1 className="sm:text-7xl text-4xl font-medium mb-4 block">
                                          Selamat Datang di{" "}
                                          <span className="block mt-2">
                                                website Official <span className="font-bold hover:underline">Sky Shoot</span>
                                          </span>
                                    </h1>
                                    <div className="flex justify-center mt-7">
                                          <div className="max-w-xl">
                                                <p className="text-base text-gray-700 mb-8">
                                                      Website ini adalah bertujuan sebagai gallery pribadi dari skyshoot & bisa juga melakukan pemesanan Privat Shoot disini..
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <svg className="sm:block hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#030712" fillOpacity="1" d="M0,192L1440,96L1440,320L0,320Z"></path>
                  </svg>
                  <Galleri name="Galleri" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#030712" fillOpacity="1" d="M0,128L1440,0L1440,0L0,0Z"></path>
                  </svg> */}

            </div>
      );
};

export default Home;
