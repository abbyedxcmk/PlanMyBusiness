const expect = chai.expect;

describe("factorial", function() {
  it("should return 24 when given 4", function() {
    const num = 4;

    const result = factorial(num);

    expect(result).to.eql(24);
  });

  it("should return 6 when given 3", function() {
    const num = 3;

    const result = factorial(num);

    expect(result).to.eql(6);
  });

  it("should return 1 when given 0", function() {
    const num = 0;

    const result = factorial(num);

    expect(result).to.eql(1);
  });

  it("should return 1 when given 1", function() {
    const num = 1;

    const result = factorial(num);

    expect(result).to.eql(1);
  });
});
