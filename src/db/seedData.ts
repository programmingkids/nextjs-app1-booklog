const initData = [
  {
    googleBookId: "Bie6AwAAQBAJ",
    title: "Hoge",
    description: "hogehogehoge",
    publishDate: new Date("2020-10-25"),
    imageLink: "https://wwww.yahoo.co.jp.",
    volumeLink: "https://wwww.yahoo.co.jp.",
    bookAuthors: {
      create: [
        {
          author: {
            create: {
              name: "AAA",
            },
          },
        },
        {
          author: {
            create: {
              name: "BBB",
            },
          },
        },
      ],
    },
    review: {
      create: [
        {
          comment: "this is comment1",
        },
        {
          comment: "this is comment2",
        },
      ],
    },
  },
];

export default initData;
