import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({
      data: "success",
    });

    return expect(register("", "")).resolves.toEqual("success");
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    return expect(register("", "")).rejects.toThrow(
      "wrong username or password"
    );
  });
});
