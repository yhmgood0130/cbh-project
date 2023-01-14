const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal 'ABC' when given '{partitionKey: 'ABC'}' input", () => {
    const event = { partitionKey: 'ABC' }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("ABC");
  });

  it("Returns the hash value when given 'DEF' input", () => {
    const event = 'DEF' 
    const hashValue = "b8fb37c1bc908b34a2b0128fb7fad485c9321be029d949dfbd74736be09365c6f872fc711ac1e576aad281d9b11c7420843129294f133eabc6455b66d0a96ebe"
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(hashValue);
  });
});
