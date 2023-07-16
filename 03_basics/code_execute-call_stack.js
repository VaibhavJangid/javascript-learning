//    JavaScript Execution Context
// 
//        
//     ______
//    |      |
//    |  {}  | => This is our "JS CODE"
//    |______|
//        |  
//        ↓
//     Here "Global Execution Context" take place
//                      ↓
//            run in "this" variable 
// 
//     **** Every enviroment have different Global Execution Context ****
//    Browser have differnt Global Execution Context
//       → Brwoser has "Window" its value
//    Node have differnt Global Execution Context
//    
//    → JavaScript is a Single Threaded
// 
//     → Types of Execution Context
//    ** Global Execution Context
//    ** Functional Execution Context
//     * Eval Execution Context
// 
//     ______
//    |      |
//    |  {}  |
//    |______|
//        ↓
//    This is "JS CODE" run in two phases ("these phase also called Executio thread")
//       1. Memory Creation Phase (also known as "Creation Phase")
//       2. Execution Phase
// 
//    1. Memory Creation Phase: In Memory Creation Phase only Memory allotment is take place for variables, functions, mathematical function, plus, minus etc
//    2. Execution Phase: Here code Execution take place
// 
// 
//       Let's take Example of CODE to understand this all
// 
let val1 = 10
let val2 = 5
function addNum(num1, num2){
   let total = num1 + num2
   return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
// 
//    
//       How this code Executed?
// 
// 
//    - Steps of code Execution
// 
//    1. Global Execution (Global Enviroment)
//                  |→ It take place in "this"
//    
//    2. Memory Phase: Here only Memory allotment is take place
//       val1 → undefine
//       val1 → undefine
//       addNum → defination
//       rsult1 → undefine
//       rsult2 → undefine
//    ** This was first cyle this always take place in the code. **
// 
//    3. Execution Phase:
//          val1 → 10
//          val1 → 5
//          addNum → this has been already defined in above memory phase
//          result1 "addNum" → this create a new "Execution Context".
//                      ↓
//                ______________
//               | New variable |
//               |  enviroment  |
//               |       +      |    (Execution Context)
//               |   Execution  |    
//               |    thread    |    This "Execution Context" will deleted after it's work completed which is executing the function and then it goes to "result1".
//               |______________|
//                       ↓
//              --------------------
//              ↓                  ↓
//         Memory Phase          Executio Context (processing)
//        - val1 → undefined       num1 = 10 { (result1 addNum = "val1") = (functional addNum "num1") = (let val1 = "10") }
//        - val2 → undefined       num2 = 5 { (result1 addNum = "val2") = (functional addNum "num2") = (let val2 = "5") }
//        - total → undefined      total = 15
//                                   ↓
//                               this "total" result its value to "Global Execution"
// 
// 
//    result2 "addNum" → this create a new "Execution Context".
//                      ↓
//                ______________
//               | New variable |
//               |  enviroment  |
//               |       +      |    (Execution Context)
//               |   Execution  |    
//               |    thread    |    This "Execution Context" will deleted after it's work completed which is executing the function and then it goes to "result1".
//               |______________|
//                       ↓
//              --------------------
//              ↓                  ↓
//         Memory Phase          Executio Context
//     { Same thing will take place like happen above in "result1"} 
// 
// 
//  
//              **** CALL STACK ****
// 
//              |                  |   Normally when there is single program "one()" it will go in and came out.
//  one()   →   |      three()     |   → three()
//  two()   →   |       two()      |   → two()
//  three() →   |       one()      |   → one()  
//              |__________________|   But above situation take place when there is more then 1 program execution happen then last input goes out of execution last.
//              |                  |   (LIFO = Last In First Out)
//              | Global Execution |
//              |__________________|
// 
// 
// 