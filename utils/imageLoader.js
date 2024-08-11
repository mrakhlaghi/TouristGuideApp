const imageLoader = ({ src, width, height, quality }) => {
  return `${src}?w=${width}?h=${height}&q=${quality || 75}`;
};

export default imageLoader;
