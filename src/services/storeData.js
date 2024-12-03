const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  const db = new Firestore({
    keyFilename:
      "/home/vereniaes/dicoding/asclepius/backend-api/submissionmlgc-titasari-22d7a75448fb.json",
    projectId: "submissionmlgc-titasari",
  });

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
