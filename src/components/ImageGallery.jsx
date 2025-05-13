import React from "react";

const ImageGallery = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-start w-full">
        <div>
          <h1>VitalGap - The New Age of ERP</h1>

          <p>Powering Distribution and Wholesale</p>
        </div>

        <div className="grid grid-cols-4 gap-2 w-[50%] mx-auto">
          <img
            src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
            alt=""
            className="col-span-2 w-full h-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
            alt=""
            className="w-full h-full object-cover row-span-2"
          />
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg"
            alt=""
            className="col-span-2 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
