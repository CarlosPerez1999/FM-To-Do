import { Router, type Request, type Response } from "express";
import { taskController } from "../controllers/task.controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  await taskController.getTasks(req, res);
});

router.get("/:id", async (req: Request, res: Response) => {
  await taskController.getTaskById(req, res);
});

router.post("/", async (req: Request, res: Response) => {
  await taskController.createTask(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await taskController.deleteTask(req, res);
});

router.put("/:id", async (req: Request, res: Response) => {
  await taskController.updateTask(req, res);
});

export default router;
