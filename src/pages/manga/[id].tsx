import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AppLayout from "../../components/AppLayouts/AppLayout";
import ExcerptGenresList from "../../components/ExcerptGenresList/ExcerptGenresList";
import StarSolid from "../../components/UI/Icons/StarSolid";
import { genreEntityArr } from "../../utils/test";

const MangaExcerptPage = () => {
  const { query } = useRouter();
  const mangaId = query.id;

  const renderedCharasterics = [...Array(6)].map((_, index) => (
    <div className="flex flex-col items-start" key={index}>
      <p className="font-normal text-base text-[#a0a0a0]">Type</p>
      <p className="font-normal text-base truncate max-w-fit">Manga</p>
    </div>
  ));

  //TODO: Add each anime title to layout
  return (
    <AppLayout title="Manga title">
      <div className="grid grid-cols-4 w-full mx-auto py-7 sm:py-11 text-[#1F355E] gap-x-3 gap-y-6">
        {/* {Image} */}
        <div className="col-span-4 sm:col-span-1 flex justify-center w-full">
          <div className="max-w-[220px] max-h-[320px]">
            <Image
              width={220}
              height={320}
              src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg"
              alt="anime"
              className="bg-[#D9D9D9] rounded-xl"
            />
          </div>
        </div>

        {/* {Main} */}
        <div className="col-span-4 sm:col-span-3 lg:col-span-2 sm:ml-5 lg:ml-0">
          <div className="flex flex-col space-y-6">
            <div className="flex item-center justify-between">
              <div>
                <h1 className="font-bold text-2xl">Naruto Shippuden</h1>
              </div>
              <div className="flex items-end space-x-3">
                <div className="flex items-center space-x-1">
                  <StarSolid className="w-6 h-6" fill="#6AD0F0" />
                  <p className="font-bold text-xl">9.7</p>
                </div>
                <p className="font-normal text-base text-[#BFBFBF]">36.3k</p>
              </div>
            </div>
            <div>
              <p className="text-sm sm:text-base">
                Guts, a former mercenary now known as the Black Swordsman is out
                for revenge. After a tumultuous childhood, he finally finds
                someone he respects and believes he can trust, only to have
                everything fall apart when this person takes away everything
                important to Guts for the purpose of fulfilling his own desires.
                Now marked for death...
              </p>
            </div>
            <div>
              <ExcerptGenresList genresList={genreEntityArr} />
            </div>
          </div>
        </div>

        {/* {Side Section} */}
        <div className="col-span-4 lg:col-span-1 flex justify-center">
          <div className="flex lg:flex-col items-start justify-center flex-wrap lg:justify-start gap-x-10 gap-y-3 w-full lg:w-[80%] h-fit bg-[#F2F2F2] rounded-xl p-3 lg:p-6 ">
            {renderedCharasterics}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MangaExcerptPage;
