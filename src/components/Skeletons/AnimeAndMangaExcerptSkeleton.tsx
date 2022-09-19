import ContentLoader from "react-content-loader";

const AnimeAndMangaExcerptSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={177}
      height={316}
      viewBox="0 0 177 316"
      backgroundColor="#d8d8d8"
      foregroundColor="#ecebeb"
      className="min-w-[120px] sm:min-w-[177px] pl-2 pt-2"
    >
      <rect x="0" y="0" rx="20" ry="20" width="177" height="240" />
      <rect x="10" y="256" rx="5" ry="5" width="147" height="16" />
      <rect x="10" y="284" rx="3" ry="3" width="147" height="10" />
    </ContentLoader>
  );
};

export default AnimeAndMangaExcerptSkeleton;
