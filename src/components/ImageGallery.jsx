import React, { useState } from "react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="lg:flex  items-center w-full">
        <div>
          <h1 className="text-4xl md:text-center">
            VitalGap - The New Age of ERP
          </h1>
          <p className="mt-4 text-xl md:text-center">
            Powering Distribution and Wholesale
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 w-1/2 mx-auto rounded-2xl mt-10">
          <img
            src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
            alt="Cascade boat in China"
            className="col-span-2 w-full h-full object-cover cursor-pointer"
            onClick={() =>
              openModal(
                "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg",
                "Cascade boat in China"
              )
            }
          />
          <img
            src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg"
            alt="Rock formations by the sea"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() =>
              openModal(
                "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg",
                "Rock formations by the sea"
              )
            }
          />
          <img
            src="https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
            alt="Sea beach"
            className="w-full h-full object-cover row-span-2 cursor-pointer"
            onClick={() =>
              openModal(
                "https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
                "Sea beach"
              )
            }
          />
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Single tree during sunset"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() =>
              openModal(
                "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
                "Single tree during sunset"
              )
            }
          />
          <img
            src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg"
            alt="Group of elephants"
            className="col-span-2 w-full h-full object-cover cursor-pointer"
            onClick={() =>
              openModal(
                "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg",
                "Group of elephants"
              )
            }
          />
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed lg:top-[8%] lg:left-[5%] md:top-[22%] md:-left-[45%] inset-0 bg-transparent flex items-start justify-center z-50"
          onClick={closeModal}
        >
          <div className="container mx-auto my-24 relative">
            <div className="flex items-start w-full">
              <div className="invisible">
                <h1 className="text-4xl">VitalGap - The New Age of ERP</h1>
                <p className="mt-4 text-xl">
                  Powering Distribution and Wholesale
                </p>
              </div>

              <div className="relative lg:w-7/12 mx-auto rounded-2xl bg-white shadow-2xl">
                <button
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                >
                  ✕
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
