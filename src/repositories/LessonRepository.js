import lessons from "../data/lessons.json";

export class LessonRepository {
  async getAll() {
    return lessons;
  }

  async getById(id) {
    const lesson = lessons.find((l) => l.id === id);
    return lesson ?? null;
  }
}
