import { motion } from "framer-motion"


const Galleri = (props) => {

      return (
            <>
                  <div className="min-h-screen bg-gray-950 pb-20">
                        <div className="pt-10">
                              <h1 className="text-white text-center text-5xl font-bold">{props.name}</h1>
                              <p className="text-white text-center mt-4">Ini adalah daftar foto foto saya selama melakukan aktivitas photograph.</p>
                        </div>
                        <div className="p-9 w-full sm:mt-12">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="grid gap-4">
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                                          </motion.div>
                                    </div>
                                    <div className="grid gap-4">
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                                          </motion.div >
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                                          </motion.div>
                                    </div>
                                    <div className="grid gap-4">
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                                          </motion.div>
                                    </div>
                                    <div className="grid gap-4">
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                                          </motion.div>
                                          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.8 }}>
                                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                                          </motion.div>
                                    </div>
                              </div>


                        </div>
                  </div>
            </>
      )
}
export default Galleri