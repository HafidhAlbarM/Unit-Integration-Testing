import { describe, it, expect, vi, beforeEach } from "vitest";
const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");

TodoModel.create = vi.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("TodoController.createTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });

  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });

  it("should return 201 resoponse code", () => {
    TodoController.createTodo(req, res, next);
    // ini res.status()
    expect(res.statusCode).toBe(201);
    // ini res.send()
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return json body in response", () => {
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});