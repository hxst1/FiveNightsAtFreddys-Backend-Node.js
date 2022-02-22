/* const Robot = require("../../db/models/Robot");
const { getAllRobots, getRobot } = require("./robotsControllers");

jest.mock("../../db/models/Robot");

describe("Given an getAllRobots controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a response", () => {
    test("Then it should call method json with a list of robots of the received response", async () => {
      const res = {
        json: jest.fn(),
      };
      const robots = [
        {
          id: "01010101010101",
          name: "Luis",
          age: 30,
        },
      ];
      Robot.find = jest.fn().mockResolvedValue(robots);

      await getAllRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robots });
    });
  });
});

describe("Given a getRobot controller", () => {
  describe("When it receives a response", () => {
    test("Then if the robot exists it should call method json with the robot", async () => {
      const req = {
        params: {
          id: "blablabla",
        },
      };
      const res = {
        json: jest.fn(),
      };
      const next = jest.fn();
      const robot = {
        id: "blablabla",
        name: "Marta",
        age: 32,
      };
      Robot.findById = jest.fn().mockResolvedValue(robot);

      await getRobot(req, res, next);

      expect(res.json).toHaveBeenCalledWith(robot);
      expect(next).not.toHaveBeenCalled();
    });

    test("Then if the robot doesn't exist it should call next with a not found error", async () => {
      const req = {
        params: {
          id: "blablabla",
        },
      };
      const next = jest.fn();
      const error = new Error("Robot not found");

      Robot.findById = jest.fn().mockResolvedValue(null);

      await getRobot(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });

    test("Then if the id format is invalid it should call next", async () => {
      const req = {
        params: {
          id: "blablabla",
        },
      };
      const next = jest.fn();
      const error = new Error("Invalid id");

      Robot.findById = jest.fn().mockRejectedValue(error);

      await getRobot(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
 */
