var Node=function(val){
    this.val=val;
    this.next=null;
}
var MyLinkedList = function() {
this.head=null;
this.size=0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
if(index<0||index>=this.size)return -1;
   
   let current=this.head;
   let count=0;
    while(current!==null){
       if(count===index ){
            return current.val;
        }    count++; 
        current=current.next;
    
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
 let current=new Node(val);
current.next=this.head;
this.head=current;
this.size++;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode=new Node(val);
    
    if(this.head==null){
        this.head=newNode;
        this.size++
        return;
    }
   let current=this.head;
    while(current.next!==null){
        current=current.next;
    }
    current.next=newNode;
this.size++
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
if (index<0||index==0){
    this.addAtHead(val);
    return 
}

if(this.size!==undefined &&index>this.size){
return;}
let newNode=new Node(val);
let current=this.head;
let previous;
let count=0;
while(count<index){
    previous=current;
    count++;
    current=current.next}

newNode.next=current;
previous.next=newNode;
this.size++;



};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0||index>=this.size){return;}
    if(index===0){
        
        this.head=this.head.next;
        this.size--;
        return;

    }
    let prev;
    let count=0;
    let current=this.head;
    while(count<index){
        prev=current;
        count++;
        current=current.next;
    }
    prev.next=current.next;
    this.size--;
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */