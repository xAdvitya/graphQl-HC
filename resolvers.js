// import { nanoid } from 'nanoid';


class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssist }
  ) {
    this.id = id;
    this.category = category;
    (this.courseName = courseName),
      (this.price = price),
      (this.language = language),
      (this.email = email),
      (this.stack = stack),
      (this.teachingAssist = teachingAssist);
  }
}

const courseholde = {};

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseholde[id]);
  },
  createCourse: ({ input }) => {
    let id = nanoid();
    courseholde[id] = input;
    return new Course(id, input);
  }
};

export default resolvers;
