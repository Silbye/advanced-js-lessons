const music = [
  {
    title: "Название альбома",
    artist: "Исполнитель",
    year: 2000,
  },
  {
    title: "Название альdaaadsadбома",
    artist: "Исполssssaaaaнитель",
    year: 20020,
  },
  {
    title: "Наasdasds альбома",
    artist: "Испsель",
    year: 2200,
  },
  {
    title: "Название альбомaaaа",
    artist: "Исполнитель",
    year: 2022,
  },
];

const musicCollection = {
  music: [...music],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.music.length) {
          return { value: this.music[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
