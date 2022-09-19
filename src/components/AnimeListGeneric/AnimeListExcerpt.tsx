import Link from "next/link";
import React, { useState } from "react";
import { IAnime } from "../../types/anime";

interface RecomendationsListExcerptProps {
  data: IAnime;
}

const RecomendationsListExcerpt = ({
  data,
}: RecomendationsListExcerptProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaveHovered, setIsSaveHovered] = useState(false);
  const [isLikeHovered, setIsLikeHovered] = useState(false);
  const [isDislikeHovered, setIsDislikeHovered] = useState(false);

  const episodesString = `${data?.episodes || 0} episodes`;
  const details = [data?.year, data?.type].join(", ");

  const hoveredDetailsContent = isHovered && (
    <div
      className="hidden sm:block rounded-xl absolute top-0 right-0 bottom-0 left-0 p-4 cursor-pointer bg-opacity-70 bg-black "
      onClick={e => e.preventDefault()}
    >
      <div className="rounded-xl flex flex-col justify-between h-full">
        <div className="rounded-xl flex flex-col space-y-2 items-end h-full">
          <p
            className="cursor-pointer"
            onMouseOver={() => setIsSaveHovered(true)}
            onMouseLeave={() => setIsSaveHovered(false)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-200"
                fill={isSaveHovered ? "#ffff" : "#d9d7e0"}
                d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"
              />
            </svg>
          </p>
          <p
            className="cursor-pointer"
            onMouseOver={() => setIsLikeHovered(true)}
            onMouseLeave={() => setIsLikeHovered(false)}
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
              <path
                d="M31.881,12.557c-0.277-0.799-0.988-1.384-1.844-1.511l-8.326-1.238l-3.619-7.514  C17.711,1.505,16.896,1,16,1c-0.896,0-1.711,0.505-2.092,1.294l-3.619,7.514l-8.327,1.238c-0.855,0.127-1.566,0.712-1.842,1.511  c-0.275,0.801-0.067,1.683,0.537,2.285l6.102,6.092l-1.415,8.451C5.2,30.236,5.569,31.09,6.292,31.588  C6.689,31.861,7.156,32,7.623,32c0.384,0,0.769-0.094,1.118-0.281L16,27.811l7.26,3.908C23.609,31.906,23.994,32,24.377,32  c0.467,0,0.934-0.139,1.332-0.412c0.723-0.498,1.09-1.352,0.947-2.203l-1.416-8.451l6.104-6.092  C31.947,14.239,32.154,13.357,31.881,12.557z M23.588,19.363c-0.512,0.51-0.744,1.229-0.627,1.934l1.416,8.451l-7.26-3.906  c-0.348-0.188-0.732-0.281-1.118-0.281c-0.384,0-0.769,0.094-1.117,0.281l-7.26,3.906l1.416-8.451  c0.118-0.705-0.114-1.424-0.626-1.934l-6.102-6.092l8.326-1.24c0.761-0.113,1.416-0.589,1.743-1.268L16,3.251l3.62,7.513  c0.328,0.679,0.982,1.154,1.742,1.268l8.328,1.24L23.588,19.363z"
                className="transition-all duration-200"
                fill={isLikeHovered ? "#ffff" : "#d9d7e0"}
              />
            </svg>
          </p>
          <p
            className="cursor-pointer"
            onMouseOver={() => setIsDislikeHovered(true)}
            onMouseLeave={() => setIsDislikeHovered(false)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1801535,18.8872603 C15.7133809,20.0273683 14.0985449,21.0687615 12.8682739,21.6838971 L12,22.118034 L11.1317261,21.6838971 C9.56674931,20.9014086 7.37949522,19.4291785 5.66630483,17.9414079 C2.39888739,15.1039139 0.643286537,12.1671303 0.643286537,9.11987614 C0.643286537,7.15580739 1.31027009,5.41480526 2.43895721,4.14606399 L1,2.70710678 L2.41421356,1.29289322 L22.4142136,21.2928932 L21,22.7071068 L17.1801535,18.8872603 Z M3.8566261,5.56373288 C3.09252649,6.46444109 2.64328654,7.69907931 2.64328654,9.11987614 C2.64328654,11.4905211 4.10619359,13.9376841 6.97767814,16.4313417 C8.55588399,17.8018889 10.5880162,19.171604 12,19.8819258 C13.0545929,19.3513953 14.45513,18.4530284 15.754104,17.4612108 L3.8566261,5.56373288 Z M20.1287285,16.2074082 L18.7131223,14.791802 C20.4669259,12.8641138 21.3567135,10.9687246 21.3567135,9.11987614 C21.3567135,6.19577447 19.3706407,4.01064899 16.7113557,4.00000753 C15.4984526,4.00000017 14.8246627,4.12023913 14.0246017,4.49836057 C13.5332011,4.73060422 13.0980105,5.04357385 12.7193478,5.44030506 L12.0020961,6.19178168 L11.2784748,5.44643666 C10.9080948,5.06493754 10.479228,4.75895182 9.99325291,4.52686678 C9.33393125,4.21199734 8.74230331,4.0636595 7.93829128,4.01697098 L6.03590894,2.11458864 C6.43991941,2.03922162 6.85959546,2 7.29240297,2 C8.72838449,2 9.73450926,2.18693414 10.8551428,2.72211033 C11.2591887,2.91506884 11.6382026,3.14534408 11.9899397,3.41236773 C12.3552052,3.12992505 12.7493174,2.88896278 13.1700073,2.69013814 C14.2690408,2.17071757 15.2257088,1.99999852 16.7153604,2.00001552 C20.5229336,2.01524059 23.3567135,5.13303401 23.3567135,9.11987614 C23.3567135,11.5507972 22.239464,13.9114158 20.1287285,16.2074082 Z"
                className="transition-all duration-200"
                fill={isDislikeHovered ? "#ffff" : "#d9d7e0"}
              />
            </svg>
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-white text-lg sm:text-2xl font-bold">
            {data?.score}
          </p>
          <p className="text-[#d9d7e0] text-xs sm:text-sm font-normal truncate text-ellipsis overflow-x-hidden">
            {details}
          </p>
          <p className="text-[#d9d7e0] text-xs sm:text-sm font-normal truncate text-ellipsis overflow-x-hidden">
            {episodesString}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[120px] sm:w-[177px] sm:pl-2 pt-2 flex">
      <div className="w-[120px] sm:w-[177px]">
        <Link href={"https://moodle.astanait.edu.kz"}>
          <div
            className="relative cursor-pointer h-[183px] sm:h-[240px] bg-black rounded-xl sm:hover:scale-105 duration-200"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {hoveredDetailsContent}
            <picture>
              <img
                src={data?.images?.jpg?.image_url}
                className="rounded-xl duration-200 bg-gray-500 object-cover h-full w-[120px] sm:w-[177px]"
                alt=""
              />
            </picture>
          </div>
        </Link>

        <div className="py-3 pl-2">
          <Link href={"/"}>
            <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-sm sm:text-base text-[#1F355E] font-medium">
              {data?.title}
            </p>
          </Link>
          <p className="truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm  text-[#6FBEDC]">
            {data?.studios?.[0]?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecomendationsListExcerpt;
