class MaxHeapExtraxtMax{
    constructor(){
        this.values = [44,35,33,18,27,12];
    }
    //Insersion of elements
    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx>0){
            let parentidx = Math.floor((idx-1)/2);
            let parent = this.values[parentidx];
            if(element <= parent) break;
            this.values[parentidx] = element;
            this.values[idx] = parent;
            idx = parentidx;
        }
    }
    //Extracion of Maximum element
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
         this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx +1;
            let rightChildIdx = 2*idx + 2;
            let swap = null;

            if(leftChildIdx < length){
                let leftChild  = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                let rightChild  = this.values[rightChildIdx];
                if(
                (swap == null && rightChild > element)||
                (swap !== null && rightChild > element)
                ){
                    swap = rightChildIdx;
                }
            } 

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap
        }

    }
}

let heap3= new MaxHeapExtraxtMax();
