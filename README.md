# angular 组件传值通信

## 父传子

- 父组件中

```html
<app-child2 [uName]="userName"></app-child2>
```

- 子组件中
```javascript
export class Child2Component implements OnInit {
    @Input()
    uName:string=""
    constructor() { }
    ngOnInit(): void {}
}
```

## 子传父

- 子组件中

```typescript
export class Child1Component implements OnInit {
    userInput:string = ""
    @Output()
    changeEvent = new EventEmitter();  //定义一个对外的Event
    constructor() { }
    ngOnInit(): void {
    }
    doClick(){
      console.log(this.userInput)
      this.changeEvent.emit(this.userInput)
    }
}
```

- 父组件

```html
<app-child1  (changeEvent)="modifyUserName($event)"></app-child1>
```

```typescript
modifyUserName($event:any): void {
    console.log($event)
    this.userName = $event
}
```



## 根据ViewChild指令 通过IDID 直接访问子组件的属性

```html
<app-child2 #c2 [uName]="userName"></app-child2>
<button (click)="getByID()">直接根据ID进行修改，不会映射到父组件</button>
```

```typescript
@ViewChild('c2',{static:true})
ccc2!:Child2Component
getByID(){
    console.log(this.ccc2.uName)
    this.ccc2.uName = "张三"
}
```

## 兄弟组件通信

```html
AppComponent
Brother1 的值传给所有的brother2

<app-brother1></app-brother1>
<app-brother2></app-brother2>
<app-brother2></app-brother2>
<app-brother2></app-brother2>
```

```html
Brother1

<p>brother1 works!</p>
<input [(ngModel)]="name" />
<button (click)="b1Click()">点击后，要修改brother2的值</button>

export class Brother1Component implements OnInit {
    name:string = ""
    constructor(private bpvs:BrotherPassValueService) { }
    ngOnInit(): void {
    }
    b1Click(){
      console.log(this.name);
      this.bpvs.emit(this.name)
    }
}
```

```html
Brother2

<p>brother2 works!</p>
<div>从brother1 传过来的是 {{psv}}</div>

export class Brother2Component implements OnInit , OnDestroy {
    psv:string = ""
    private subscription:Subscription = new Subscription();
    constructor(private bpvs:BrotherPassValueService) { }
    ngOnInit(): void {
      this.subscription = this.bpvs.listener.subscribe(value=>{
        console.log("传的值是",value);
        this.psv = value;
      })
    }
    ngOnDestroy(): void {
      if(this.bpvs){
        this.subscription.unsubscribe()
      }
    }
}
```

```typescript
BrotherPassValueService

export class BrotherPassValueService {
    private nameSubject = new Subject<string>();
    constructor() { }
    listener = this.nameSubject.asObservable()
    emit(value: string){
      this.nameSubject.next(value);
    }
}
```

