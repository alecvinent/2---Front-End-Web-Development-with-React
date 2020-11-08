import { date, lorem, name, random } from "faker";

export const COMMENTS = [];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    const date_options = { year: "numeric", month: "short", day: "2-digit" };
    const comment = {
      id: j,
      author: name.findName(),
      date: date.recent(5).toLocaleDateString("en-US", date_options),
      description: lorem.lines(2),
      rating: random.number(5),
      dishId: i,
    };

    COMMENTS.push(comment);
  }
}

export function getComments(dishId) {
    const comments = [];
  
    if (dishId !== null) {
      for (let index = 0; index < COMMENTS.length; index++) {
        if (COMMENTS[index]["dishId"] === dishId) {
          comments.push(COMMENTS[index]);
        }
      }
    }
  
    return comments;
  }
