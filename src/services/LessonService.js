import { LessonRepository } from "../repositories/LessonRepository.js";

export class LessonService {
  constructor() {
    this.lessonRepo = new LessonRepository();
  }

  async getLessons() {
    return this.lessonRepo.getAll();
  }

  async getLessonById(id) {
    return this.lessonRepo.getById(id);
  }
}
