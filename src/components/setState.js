import React,{Component} from 'react'


class Counter extends Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

   /*  increment(){
        this.setState({
        count:this.state.count+1
        },()=>{
            console.log('callback value',this.state.count)
            
        })
        // manytime we want to execute code our only after state has been updated,handle this situation pass second parameter(callback) in setState
        // this.state.count+=1;
        // console.log(this.state.count)
    } */

// passing the function as argument instead of object
    increment(){
        this.setState((prevState,props)=>({
            count:prevState.count +1
        }))
        console.log(this.state.count);
    }

    incremmentFive(){
       for(let i=1;i<=5;i++){
        this.increment()
       }
    }

    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
            <button onClick={()=> this.increment()}>Increment</button>
            <button onClick={()=> this.incremmentFive()}>IncrementFIve</button>
            </div>
        )
    }
}

/* 

1. **Performance Optimization by React**:
   - React may optimize performance by batching multiple `setState` calls into a single update for better efficiency.

2. **Issue with Multiple `setState` Calls**:
   - In the scenario described, where five `setState` calls are made consecutively, all updates are grouped into a single batch.
   - This can lead to unexpected behavior, as each call to `setState` operates on the same base state, potentially overwriting changes made by previous calls.

3. **Solution: Using a Function as an Argument to `setState`**:
   - To ensure that state updates are based on the previous state and avoid conflicts caused by batching, a function should be passed as an argument to `setState` instead of an object.
   - By passing a function, React provides the previous state as an argument, allowing updates to be calculated based on this previous state.
   - This ensures that each update operates on the most recent state, preventing conflicts and producing the expected results.

4. **Implementing the Solution**:
   - The code demonstrates passing an arrow function as an argument to `setState`, which receives the previous state as a parameter.
   - Within the function body, the count state value is updated based on the previous state (`prevState.count + 1`), ensuring that each increment operates on the latest count value.

5. **Result and Confirmation**:
   - After implementing the solution and testing in the browser, the UI correctly reflects the expected count values (5 and 10) upon consecutive increments.
   - This confirms that the updates are now based on the previous state, leading to the desired outcome.



*/
export default Counter