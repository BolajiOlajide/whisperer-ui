import NF from 'ng-faker';

export const randomWhispers = Array(10).fill('').map((_, idx) => ({
  id: idx + 1,
  text: `${NF.lorem.phrase()} ${NF.lorem.phrase()}`,
  whisperer: {
    username: NF.name.firstName()
  }
}));

export const randomWhisperComments =  Array(10).fill('').map((_, idx) => ({
  id: idx + 1,
  comment: `${NF.lorem.phrase()} ${NF.lorem.phrase()}`,
  commenter: {
    username: NF.name.firstName()
  }
}));
