import React, { FC } from 'react'
import ContentLoader from "react-content-loader"



interface LoaderProps {
}
const Loader: FC<LoaderProps> = (props) => {
  const { } = props
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={474}
      viewBox="0 0 280 474"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="260" rx="5" ry="5" width="280" height="30" />
      <rect x="0" y="300" rx="5" ry="5" width="100" height="30" />
      <circle cx="200" cy="315" r="15" />
      <circle cx="250" cy="315" r="15" />
      <rect x="0" y="350" rx="5" ry="5" width="280" height="51" />
    </ContentLoader>

  );
}



export default Loader;

