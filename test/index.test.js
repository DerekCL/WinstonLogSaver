const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

const expect = chai.expect;
chai.use(chaiHttp);

const meta = {
  res: {
    statusCode: 200,
  },
  req: {
    url: "/search/v1/?&companies[]=fgdrfgdf&companies[]=dsfsdf",
    headers: {
      host: "www.localhost:7000",
      connection: "keep-alive",
      "content-length": "278",
      pragma: "no-cache",
      "cache-control": "no-cache",
      origin: "http://localhost:5000",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
      dnt: "1",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      accept: "*/*",
      referer: "http://localhost:5000/",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
    },
    method: "POST",
    httpVersion: "1.1",
    originalUrl: "/search/v1/?&companies[]=fgdrfgdf&companies[]=dsfsdf",
    query: {
      companies: ["fgdrfgdf", "dsfsdf"],
    },
  },
  responseTime: 685,
};

const body = {
  level: "info",
  message:
    "POST /search/v1/?&companies[]=fgdrfgdf&companies[]=dsfsdf 200 685ms",
  meta: meta,
};

describe("POST Tests", () => {
  describe("POST /logger/winston/v1", () => {
    it("works without errors", () => {
      chai
        .request(app)
        .post("/logger/winston/v1")
        .send(body)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
    });
  });
});
