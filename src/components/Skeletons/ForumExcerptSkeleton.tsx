import ContentLoader from "react-content-loader";

const ForumExcerptSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={340}
      height={240}
      viewBox="0 0 340 140"
      backgroundColor="#d8d8d8"
      foregroundColor="#ecebeb"
      className="min-w-[340px] h-[140px] my-3"
    >
      <rect x="0" y="0" rx="20" ry="20" width="340" height="140" />
    </ContentLoader>
  );
};

export default ForumExcerptSkeleton;
