import { LessonsRepository, CreateLessonData } from "@/repositories";

interface DatabaseInMemoryProps {
  id: string;
  title: string;
  description?: string | null;
}

export class InMemoryLessonsRepository implements LessonsRepository {
  public databaseInMemory: Array<DatabaseInMemoryProps> = [];

  async create(data: CreateLessonData): Promise<void> {
    this.databaseInMemory.push({
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description ?? null,
    });
  }
}
