import ContentLoader from "react-content-loader";

const NewsExcerptSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={354}
    height={312}
    viewBox="0 0 354 312"
    backgroundColor="#d8d8d8"
    foregroundColor="#ecebeb"
    className="min-w-[240px] sm:min-w-[354px] sm:pl-2 pt-2"
  >
    <rect x="0" y="0" rx="20" ry="20" width="354" height="240" />
    <rect x="10" y="291" rx="4" ry="4" width="200" height="10" /> 
    <rect x="10" y="259" rx="5" ry="5" width="319" height="16" /> 
  </ContentLoader>
  );
};

export default NewsExcerptSkeleton;
