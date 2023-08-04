``` Javascript
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
    
    Blocking Code      v/s     Non Blocking Code
         ↓                            ↓
Block the flow Program.     Donot Block the Execution.  
         ↓                            ↓
   Read file Sync.             Read file Async.

```

[JS_Engine-WEB_API](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIL7bnuVQKbfYHDqQnu-2y7MIDHqoS6NskNBsRYCN872qC7-1kkFbCBd061TWaFnchWp44s5pXOICLO2k-FAw_6hUEac1eL84KEiguyEFwN9aFbChkQ_c-YA7WfvDXXykoQkizLCvb1jcHtvupytOf5mkQLdhfhLMNmnFzkHh9cyo3tQXb6R8nkeJ1lMw/w640-h395/Screenshot%20(3).png)
  

