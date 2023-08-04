/* 
--- Async Javascript fundamentals ---


- Javascript 'is'
    |-> Synchronous
    |-> Single Threaded

These above factors are default behaviour of Javascript.


- Execution Context: Execute one line of code at a time.
        |
        |→ console.log 1 
        |→ console.log 2
        |→ console.log 3
        |    
        |
        ↓   
    
     ____________       _____________
    |            |     |             |
    | CALL Stack |     | Memory Heap |
    |____________|     |_____________|
    
    Each operation waits for the last one to complete before executing.

 -----------------------------------------------------
    
    Blocking Code     v/s     Non Blocking Code
         ↓                            ↓
Block the flow Program.     Donot Block the Execution.  
         ↓                            ↓
   Read file Sync.             Read file Async.
   
   

*/ 