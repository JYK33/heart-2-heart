// page with the families in need in one page
import React from "react";
import background from "/public/assets/images/familyPlaceholder.jpeg";
import Drop from "./Drop";

const Card = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-8 backdrop-blur-sm"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-6 mb-10">
        <Drop />
      </div>
      <div className="flex flex-col justify-center items-center w-4/5 mt-8">
        <a
          href="#"
          class="flex flex-col items-center bg-gray-100  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="assets/images/fam1.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              The Owens Family
            </h5>
            <p class="mb-3 font-normal text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              laborum, vero aspernatur similique magnam quisquam nihil voluptas
              temporibus a, illo dolorem at id ad culpa ut nisi placeat rem hic.
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center w-4/5 mt-8 mb-20">
        <a
          href="#"
          class="flex flex-col items-center bg-gray-100  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="assets/images/fam1.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              The Owens Family
            </h5>
            <p class="mb-3 font-normal text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              laborum, vero aspernatur similique magnam quisquam nihil voluptas
              temporibus a, illo dolorem at id ad culpa ut nisi placeat rem
              hic.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              laborum, vero aspernatur similique magnam quisquam nihil voluptas
              temporibus a, illo dolorem at id ad culpa ut nisi placeat rem hic.
            </p>
          </div>
        </a>
      </div>

      {/* <div className="flex flex-col w-2/3 gap-5 p-2 mx-auto bg-white shadow-xl select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
        <div
          // style={{
          //   backgroundImage: `url(${data.famPhoto})`,
          // }}
          className="bg-yellow-400 h-25 sm:h-full sm:w-72 rounded-xl"
        ></div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full text-white bg-gray-100  h-14 rounded-2xl">
              <h2 className="text-center p-4 text-black">OWENS</h2>
            </div>
            <div>Help Needed</div>
          </div>
          <div className="flex gap-3 mt-auto">
            <button
              type="button"
              className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Clothes
            </button>
            <button
              type="button"
              className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              School Supplies
            </button>
          </div>
        </div>
      </div> */}
      {/* New card idea */}
    </div>
  );
};

export default Card;
