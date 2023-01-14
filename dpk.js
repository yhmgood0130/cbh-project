const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  const candidate = candidateEvent(event);  

  return checkCandidateType(candidate);
};

function candidateEvent(event) {
  if (event) {
    if (event.partitionKey) {
      return event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      return crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
}

function checkCandidateType(candidate) {
  const convertedCandidate = candidate ? 
      (typeof candidate !== "string" ? JSON.stringify(candidate) : candidate) :
      TRIVIAL_PARTITION_KEY;

  if (convertedCandidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return convertedCandidate;
}