import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

let vaccineTest;
jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  vaccineTest = new VaccineTest();
  // jest.clearAllMocks();

  // TODO feedback: 就clear需要clear就行了
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockReset();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    vaccineTest.inject();
    // expect(mockAcceptInjection).toHaveBeenCalledTimes(1);

    // TODO feedback: 这个测试的描述是说要injection with vaccine
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockReturnValue(true);
    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies.mockReturnValue(false);
    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
