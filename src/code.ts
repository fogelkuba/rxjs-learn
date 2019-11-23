// import * as Rx from "rxjs/Observable";
// console.log(Rx);

import { Observable } from "rxjs";

// const subscribe = function (observer: any) {
//     observer.next('Hey guys')
// };

const observable = Observable.create((observer: any) => {
    observer.next('Hey guys')
});

observable.subscribe((v:any) => {
    console.log(v)
});
