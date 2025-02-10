function makeGroup() {
    let people = [];
    let i = 0;
    while(i < 5) {
        let man = function () {
            console.log(i);
        }

        people.push(man);
        i++;
       // man(); - 1,2,3,4,5
    }
   // people[0]();// 5
    return people;
}
let group = makeGroup();
group[0](); // 5
group[4](); // 5