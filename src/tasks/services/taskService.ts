import { PrismaClient, type Task } from "../../generated/prisma";

class TaskService {
  private prisma = new PrismaClient();

  async getTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async createTask(data: Task): Promise<Task | null> {
    return this.prisma.task.create({data});
  }

  async deleteTask(id: number): Promise<Task | null> {
    return this.prisma.task.delete({
      where: { id },
    });
  }

  async updateTask(id: number, data: Task): Promise<Task | null> {
    return this.prisma.task.update({
      where: { id },
      data: data,
    });
  } 
}
