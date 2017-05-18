const fs = require('fs'),
    http = require('http'),
    md5 = require('crypto-js/md5'),
    q = require('q');

const privateKey = process.argv[2];
const publicKey = process.argv[3];
const characterId = process.argv[4];
const requestedPages = parseInt(process.argv[5], 10);

const concat = (a, b) => a.concat(b);
const pluck = key => obj => obj[key];

const getPage = page => {
  const request = require('requestretry');

  console.log(`GETTING PAGE ${page}`);
  const defer = q.defer(),
      ts = new Date().getTime(),
      hash = md5(ts + privateKey + publicKey);

  request({
    url: `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?offset=${(page * 100)}&limit=100&ts=${ts}&hash=${hash}&apikey=${publicKey}`,
    json: true,
    maxAttempts: 5,
    retryDelay: 1000,
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError
  }, (err, response, body) => {
    if (err) {
      console.log(`HTTP GET OF PAGE ${page} FAILED`);
      defer.reject(err);
    } else {
      console.log(`HTTP GET OF PAGE ${page} COMPLETE`);
      defer.resolve(body.data);
    }
  });

  return defer.promise;
};

const writeDb = () => data => {
  const defer = q.defer();
  fs.writeFile("data/db.json", JSON.stringify(data, null, ' '), err => {
    if (err)
      defer.reject(err);
    else
      defer.resolve();
  });
  return defer.promise;
};

const range = max => {
  const numbers = [];
  for (let i = 0; i < max; i++)
    numbers.push(i);
  return numbers;
};

const toComic = json => {
  const pluckedComic = {
    id: json.id,
    title: json.title,
    description: json.description,
    pageCount: json.pageCount,
    thumbnail: `${json.thumbnail.path}.${json.thumbnail.extension}`,
    images: json.images.map(image => `${image.path}.${image.extension}`)
  };
  pluckedComic.characters = json.characters.items.map(character => character.name);
  const detailUrl = json.urls.filter(url => url.type === 'detail');
  if (detailUrl.length > 0)
    pluckedComic.url = detailUrl[0].url;
  return pluckedComic;
};

q.all(range(requestedPages).map(getPage))
    .then(pages => {
      return {
        comics: pages
            .map(pluck('results'))
            .reduce(concat, [])
            .map(toComic)
      };
    })
    .then(writeDb())
    .then(
        () => console.log("SUCCESS"),
        error => console.log(`ERROR: ${error}`)
    );
