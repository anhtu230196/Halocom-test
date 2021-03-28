export const sortPosts = (prevListPost, value) => {
  switch (value) {
    case "most":
      return prevListPost.sort((a, b) => b.points - a.points);
    case "least":
      return prevListPost.sort((a, b) => a.points - b.points);
    case "newest":
      return prevListPost.sort(
        (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
      );
    case "latest":
      return prevListPost.sort(
        (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
      );
    default:
      return prevListPost;
  }
};

// export const sortByTime = (prevListPost, value) => {
//   switch(value){}
// };
