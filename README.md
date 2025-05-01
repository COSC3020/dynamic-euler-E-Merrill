# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

**The worst case runtime is also the average case runtime for the Euler approximation. That being $\theta(n)$. This is because no matter what is entered as an input (other than 0,) the program will run through a loop that is of length n in order to find the approximation. Thus, the runtime will be $\theta(n)$ in the worst case scenario.**

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I originally still had the provided factorial function as well, but then Gage Hepworth helped me realize that when going bottom up, you don't have to start the factorial all the way at 0 or 1 like the function call would do. You can just calculate it as you go. Once you find 3!, finding 4! only takes one step that will be easy since we're already moving upwards in a loop to find the approximation. 
