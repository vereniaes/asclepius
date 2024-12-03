const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  const db = new Firestore({
    keyFilename:
      "/home/vereniaes/dicoding/asclepius/backend-api/submissionmlgc-titasari-44a1c7915fa3.json",
    projectId: "submissionmlgc-titasari",
  });

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
