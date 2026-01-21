import { readTodos, writeTodos } from "../models/todo.model.js";

/* CREATE TODO */
export const createTodo = (req, res, next) => {
  try {
    const todos = readTodos();
    const newTodo = {
      id: Date.now(),
      title: req.body.title,
      completed: false
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

/* GET ALL TODOS */
export const getTodos = (req, res, next) => {
  try {
    const todos = readTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

/* UPDATE TODO */
export const updateTodo = (req, res, next) => {
  try {
    const todos = readTodos();
    const index = todos.findIndex(
      (t) => t.id == req.params.id
    );

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    writeTodos(todos);

    res.status(200).json(todos[index]);
  } catch (error) {
    next(error);
  }
};

/* DELETE TODO */
export const deleteTodo = (req, res, next) => {
  try {
    const todos = readTodos();
    const filteredTodos = todos.filter(
      (t) => t.id != req.params.id
    );

    if (todos.length === filteredTodos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    writeTodos(filteredTodos);
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    next(error);
  }
};
