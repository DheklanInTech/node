const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");

    await writeFilePromise(
      "./content/result-mind.txt",
      `THIS IS AWSOME ${first}   ==== ${second}`
    );

    console.log(first, "===", second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
