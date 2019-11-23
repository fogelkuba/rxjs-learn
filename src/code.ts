import { Observable } from "rxjs";

function addItem(val:any) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys');
        observer.next('How are you?');
        setInterval(() => {
            observer.next('I am good')
        }, 2000);
        // observer.complete();

        // observer.next('This will not send');
    } catch (err) {
        observer.error(err)
    }
});

var observer = observable.subscribe(
    (v:any) => addItem(v),
    (error:any) => addItem(error),
    () => addItem('Completed'),
);

setTimeout(() => {
    observer.unsubscribe();
    console.log(observable);
}, 6001);
