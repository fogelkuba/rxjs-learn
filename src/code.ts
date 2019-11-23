import { Observable } from "rxjs";

function addItem(val:any) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Observable.create((observer: any) => {
    observer.next('Hey guys');
    observer.next('How are you?');
    observer.complete();
    observer.next('This will not send');
});

observable.subscribe(
    (v:any) => addItem(v),
    (error:any) => addItem(error),
    () => addItem('Completed'),
);


