import NF from 'ng-faker';

const randomData = Array(10).fill('').map((_, idx) => ({
  id: idx + 1,
  text: `${NF.lorem.phrase()} ${NF.lorem.phrase()}`,
  whisperer: {
    username: NF.name.firstName()
  }
}))

export default randomData;
