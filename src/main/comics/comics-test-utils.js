let idSeq = 0;

export const buildComic = id => ({
  id: id || idSeq++,
  description: "cocotero"
});

