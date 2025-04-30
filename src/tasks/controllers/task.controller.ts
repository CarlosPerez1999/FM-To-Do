import { response, type Request, type Response } from "express";
import type { Task } from "../../generated/prisma";
import { taskService } from "../services/task.service";

class TaskController {
  async getTasks(req: Request, res: Response) {
    const tasks: Task[] = await taskService.getTasks();
    return res.json(tasks);
  }

  async getTaskById(req: Request, res: Response) {
    const tasks: Task | null = await taskService.getTaskById(+req.params.id);
    return res.json(tasks);
  }

  async createTask(req: Request, res: Response) {
    const tasks: Task | null = await taskService.createTask(req.body);
    return res.json(tasks);
  }

  async deleteTask(req: Request, res: Response) {
    const tasks: Task | null = await taskService.deleteTask(+req.params.id);
    return res.json(tasks);
  }
  async updateTask(req: Request, res: Response) {
    const tasks: Task | null = await taskService.updateTask(+req.params.id, req.body);
    return res.json(tasks);
  }
}

export const taskController = new TaskController()