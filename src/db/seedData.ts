const initData = [
  {
    googleBookId: "Bie6AwAAQBAJ",
    title: "Dammy",
    description: "Dammy, Dammy, Dammy, Dammy",
    publishDate: "2020-10-25",
    imageLink: "",
    volumeLink: "",
    bookAuthors: {
      create: [
        {
          author: {
            create: {
              name: "DammyAuthor",
            },
          },
        },
        {
          author: {
            create: {
              name: "DammyAuthor",
            },
          },
        },
      ],
    },
    review: {
      create: [
        {
          comment: "this is dammy comment1",
        },
        {
          comment: "this is dammy comment2",
        },
      ],
    },
  },
];

export default initData;
