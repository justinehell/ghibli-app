const findImageById = (data, id) => {
  const filmImage = data.filter((item) => item.id === id)[0];
  if (filmImage) {
    return filmImage.src;
  } else {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThxlxfSxZUlnZuOZ4tPJiyYaTsJgxIKeF26A&usqp=CAU";
  }
};

export default findImageById;
