# Fetch

![Fetch](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjziDfhl9l9zR3uYW7YGT2zB59o_-_1iph4jMwWYy6Q5yAHtyBFPYdpPjgNwphICFR4Hrl_D1GbAS_nIskQGx8-bVRHNWDKjxYZiqD_-TUR01Uq9VlMCcQjAW36WwOhOXDxKpv11jakVAJqji7nVSsesuOoUKVbWfiJHHQ-HJ4mTE6R0EC-XjU_Rv3MBKo/w640-h364/Screenshot%20(4).png)

## Internal Working Mechanism of Fetch

``` javascript

response = fetch('something')
             |
      _______|_____________
     ↓                     ↓
 ---Data:             Web Browser
 |  Onfulfilled[]          ↓
 |  OnRejection[]    Network Request
 |                    _____|_____
 |                   ↓           ↓
 |                  (✓)         (X)
 |
 |
 |______________________
                       ↓
        
              |                  |   
              |     Response     |   
              |                  |     
              |__________________|   
              |                  |   
              |   Global Memory  |
              |__________________|

```
For more context
[![Watch this video](https://img.youtube.com/vi/Rive84an6Lc?si=8ycF1lP1B4KTq0kP/0.jpg)](https://youtu.be/Rive84an6Lc?si=qP3WM84m7tZTsWrg&t=623)