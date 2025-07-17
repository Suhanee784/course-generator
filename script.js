// --- Page Elements ---
const startPage = document.getElementById('page-start');
const subjectsPage = document.getElementById('page-subjects');
const levelsPage = document.getElementById('page-levels');
const quizPage = document.getElementById('page-quiz');
const resultsPage = document.getElementById('page-results');

const startBtn = document.getElementById('startBtn');
const subjectCardsContainer = document.getElementById('subjectCards');
const levelButtonsContainer = document.getElementById('levelButtons');
const quizTitle = document.getElementById('quizTitle');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const scoreText = document.getElementById('scoreText');
const playAgainBtn = document.getElementById('playAgainBtn');

// --- Quiz Data (cut for brevity, insert full quizData object you provided before) ---
const quizData = {
     java: {
                simple: [
                    { q: "Which keyword is used for inheritance in Java?", o: ["extends", "implements", "inherits", "super"], a: "extends" },
                    { q: "What is the entry point of a Java program?", o: ["main()", "start()", "run()", "System.main()"], a: "main()" },
                    { q: "Which of these is a primitive data type?", o: ["String", "int", "Array", "Object"], a: "int" },
                    { q: "What does 'JVM' stand for?", o: ["Java Virtual Machine", "Java Very Mighty", "Java Visual Machine", "Joint Virtual Machine"], a: "Java Virtual Machine" },
                    { q: "How do you declare a single-line comment in Java?", o: ["// comment", "/* comment */", "# comment", "<!-- comment -->"], a: "// comment" },
                    { q: "Which class is the superclass of all classes in Java?", o: ["System", "String", "Object", "Main"], a: "Object" },
                    { q: "What is the default value of a boolean in Java?", o: ["true", "false", "0", "null"], a: "false" },
                    { q: "Which keyword is used to create an instance of a class?", o: ["new", "create", "instance", "build"], a: "new" },
                    { q: "What does the 'static' keyword mean?", o: ["Belongs to the class, not an instance", "The value cannot be changed", "It's a final variable", "It's a constant"], a: "Belongs to the class, not an instance" },
                    { q: "Which package is imported by default in every Java program?", o: ["java.util", "java.io", "java.net", "java.lang"], a: "java.lang" },
                ],
                medium: [
                    { q: "What is method overloading in Java?", o: ["Methods with same name but different parameters", "Methods with same name and same parameters", "Methods with different names", "Overriding a method in subclass"], a: "Methods with same name but different parameters" },
                    { q: "What is an abstract class?", o: ["A class that cannot be instantiated", "A class with only static methods", "A final class", "An interface"], a: "A class that cannot be instantiated" },
                    { q: "What is the difference between '==' and '.equals()' for Strings?", o: ["'==' compares object references, '.equals()' compares content", "'==' compares content, '.equals()' compares object references", "They are the same", "One is for primitives, one for objects"], a: "'==' compares object references, '.equals()' compares content" },
                    { q: "What is a 'finally' block?", o: ["It executes code after a try-catch, regardless of an exception", "It is the final part of a program", "It's where final variables are declared", "It's an alternative to a catch block"], a: "It executes code after a try-catch, regardless of an exception" },
                    { q: "Which collection class is synchronized?", o: ["ArrayList", "LinkedList", "Vector", "HashSet"], a: "Vector" },
                    { q: "What is serialization?", o: ["Converting an object into a byte stream", "Sorting a collection", "A type of exception", "Creating a series of objects"], a: "Converting an object into a byte stream" },
                    { q: "What is the purpose of the 'super' keyword?", o: ["To call the parent class constructor or methods", "To create a superclass", "To define a static method", "To mark a class as final"], a: "To call the parent class constructor or methods" },
                    { q: "What is Garbage Collection?", o: ["Automatic memory management to reclaim unused memory", "Deleting unused files", "A type of exception", "A design pattern"], a: "Automatic memory management to reclaim unused memory" },
                    { q: "What is an interface in Java?", o: ["A blueprint of a class with static constants and abstract methods", "A concrete class", "A class that cannot be extended", "A class with private constructors"], a: "A blueprint of a class with static constants and abstract methods" },
                    { q: "Which of these is a checked exception?", o: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "NumberFormatException"], a: "IOException" },
                ],
                hard: [
                    { q: "What is the Java Memory Model (JMM)?", o: ["Defines how threads interact through memory", "The physical layout of memory", "The size of the heap", "The garbage collection algorithm"], a: "Defines how threads interact through memory" },
                    { q: "Explain the 'volatile' keyword.", o: ["Ensures that changes to a variable are always visible to other threads", "Makes a variable final", "Marks a variable for garbage collection", "Makes a variable serializable"], a: "Ensures that changes to a variable are always visible to other threads" },
                    { q: "What is the difference between 'fail-fast' and 'fail-safe' iterators?", o: ["Fail-fast throws ConcurrentModificationException, fail-safe operates on a clone", "Fail-safe is faster", "Fail-fast is used for synchronized collections", "There is no difference"], a: "Fail-fast throws ConcurrentModificationException, fail-safe operates on a clone" },
                    { q: "What are lambda expressions in Java 8?", o: ["Anonymous functions", "A type of exception", "A design pattern", "A collection class"], a: "Anonymous functions" },
                    { q: "What is the Diamond Problem and how does Java 8 solve it?", o: ["Multiple inheritance ambiguity, solved with default methods", "A memory leak issue", "A security vulnerability", "A performance bottleneck"], a: "Multiple inheritance ambiguity, solved with default methods" },
                    { q: "What is a 'ClassLoader' in Java?", o: ["It is responsible for loading class files at runtime", "It compiles Java code", "It is a security manager", "It is a thread pool"], a: "It is responsible for loading class files at runtime" },
                    { q: "What is reflection in Java?", o: ["The ability to inspect and modify classes, methods, and fields at runtime", "A way to mirror code", "A garbage collection technique", "A memory optimization"], a: "The ability to inspect and modify classes, methods, and fields at runtime" },
                    { q: "What are Phantom References?", o: ["References that are enqueued after the object is finalized", "Weak references", "Strong references", "A type of memory leak"], a: "References that are enqueued after the object is finalized" },
                    { q: "Explain 'metaspace' in Java 8.", o: ["A native memory region that stores class metadata", "The main heap memory", "The thread stack", "A cache for objects"], a: "A native memory region that stores class metadata" },
                    { q: "What is the purpose of the transient keyword?", o: ["To prevent a field from being serialized", "To make a field volatile", "To make a field final", "To mark a field as static"], a: "To prevent a field from being serialized" },
                ]
            },
            python: {
                simple: [
                    { q: "What keyword is used to define a function in Python?", o: ["def", "function", "define", "fun"], a: "def" },
                    { q: "How do you get the length of a list named my_list?", o: ["len(my_list)", "my_list.length()", "size(my_list)", "my_list.len"], a: "len(my_list)" },
                    { q: "Which of these data types is mutable?", o: ["list", "tuple", "string", "int"], a: "list" },
                    { q: "How do you write a single-line comment in Python?", o: ["# comment", "// comment", "/* comment */", "<!-- comment -->"], a: "# comment" },
                    { q: "What is the file extension for Python files?", o: [".py", ".pt", ".python", ".px"], a: ".py" },
                    { q: "Which operator is used for exponentiation?", o: ["*", "^", "exp()", "pow"], a: "*" },
                    { q: "How do you create a dictionary in Python?", o: ["{'key': 'value'}", "['key', 'value']", "('key', 'value')", "<'key': 'value'>"], a: "{'key': 'value'}" },
                    { q: "Which function is used to get input from the user?", o: ["input()", "get()", "scan()", "read()"], a: "input()" },
                    { q: "What does the if __name__ == '__main__': block do?", o: ["It runs only when the script is executed directly", "It's the main function", "It's a comment", "It imports the main module"], a: "It runs only when the script is executed directly" },
                    { q: "How do you select the first element of a list L?", o: ["L[0]", "L(0)", "L.first()", "L.get(0)"], a: "L[0]" },
                ],
                medium: [
                    { q: "What is a list comprehension?", o: ["A concise way to create lists", "A type of list sorting", "A machine learning model", "A way to comment code"], a: "A concise way to create lists" },
                    { q: "What is the difference between a list and a tuple?", o: ["Lists are mutable, tuples are immutable", "Tuples are mutable, lists are immutable", "They are identical", "Lists are for numbers, tuples for strings"], a: "Lists are mutable, tuples are immutable" },
                    { q: "What does the *args and **kwargs syntax do in function definitions?", o: ["Allow for a variable number of positional and keyword arguments", "Define required arguments", "Are used for pointers", "Are for asynchronous code"], a: "Allow for a variable number of positional and keyword arguments" },
                    { q: "What is a decorator in Python?", o: ["A function that modifies or enhances another function", "A way to style text", "A class variable", "A type of loop"], a: "A function that modifies or enhances another function" },
                    { q: "What is the purpose of a virtual environment?", o: ["To create isolated Python environments for projects", "To speed up Python code", "A graphical interface for Python", "A security feature"], a: "To create isolated Python environments for projects" },
                    { q: "What is the Global Interpreter Lock (GIL)?", o: ["A mutex that allows only one thread to execute Python bytecode at a time", "A tool for global variables", "A security feature", "A Python package manager"], a: "A mutex that allows only one thread to execute Python bytecode at a time" },
                    { q: "What is the difference between .py and .pyc files?", o: [".py contains source code, .pyc contains compiled bytecode", ".pyc is for C extensions", "They are the same", ".py is for Python 2, .pyc is for Python 3"], a: ".py contains source code, .pyc contains compiled bytecode" },
                    { q: "What is 'duck typing'?", o: ["'If it walks like a duck and quacks like a duck, it is a duck' - object's type is defined by its methods and properties", "A way to name variables", "A Python testing framework", "A sorting algorithm"], a: "'If it walks like a duck and quacks like a duck, it is a duck' - object's type is defined by its methods and properties" },
                    { q: "How does exception handling work in Python?", o: ["Using try, except, finally blocks", "Using if-else statements", "It's handled automatically", "Using catch and throw"], a: "Using try, except, finally blocks" },
                    { q: "What is a generator in Python?", o: ["A function that returns an iterator using the yield keyword", "A function that generates random numbers", "A class constructor", "A list comprehension"], a: "A function that returns an iterator using the yield keyword" },
                ],
                hard: [
                    { q: "What are metaclasses in Python?", o: ["Classes for creating classes", "Abstract base classes", "Decorators for classes", "A type of multithreading"], a: "Classes for creating classes" },
                    { q: "Explain the MRO (Method Resolution Order) in Python.", o: ["The order in which base classes are searched for a method", "A memory optimization technique", "A way to sort methods", "A tool for debugging"], a: "The order in which base classes are searched for a method" },
                    { q: "What are descriptors in Python?", o: ["Objects that implement __get__, __set__, or __delete__ methods, allowing for custom attribute access", "A way to describe classes", "A documentation generator", "A type of variable"], a: "Objects that implement __get__, __set__, or __delete__ methods, allowing for custom attribute access" },
                    { q: "How does asyncio work in Python?", o: ["Uses an event loop for cooperative multitasking with async/await syntax", "It uses multiple threads", "It uses multiple processes", "It's a JIT compiler"], a: "Uses an event loop for cooperative multitasking with async/await syntax" },
                    { q: "What is the difference between a shallow copy and a deep copy?", o: ["A shallow copy creates a new object but references the same nested objects; a deep copy creates fully independent copies", "Deep copy is faster", "Shallow copy is for lists only", "There is no difference"], a: "A shallow copy creates a new object but references the same nested objects; a deep copy creates fully independent copies" },
                    { q: "What is context management in Python and the with statement?", o: ["Ensures resources are properly acquired and released, using __enter__ and __exit__ methods", "A way to manage global variables", "A memory profiler", "A security context"], a: "Ensures resources are properly acquired and released, using __enter__ and __exit__ methods" },
                    { q: "How does Python's memory management work?", o: ["Uses private heap space with a reference counting system and a cyclic garbage collector", "It requires manual memory management", "It uses a garbage collector only", "It relies on the OS"], a: "Uses private heap space with a reference counting system and a cyclic garbage collector" },
                    { q: "What is function currying?", o: ["Transforming a function with multiple arguments into a sequence of nested functions", "A way to cache function results", "A debugging technique", "A way to decorate functions"], a: "Transforming a function with multiple arguments into a sequence of nested functions" },
                    { q: "What is the purpose of the __slots__ attribute in a class?", o: ["To save memory by pre-declaring attributes and preventing the creation of a __dict__ for each instance", "To define private attributes", "To create class-level variables", "To restrict method access"], a: "To save memory by pre-declaring attributes and preventing the creation of a __dict__ for each instance" },
                    { q: "What are Python's weak references?", o: ["References that don't increase an object's reference count, allowing it to be garbage collected", "Insecure references", "References to deleted objects", "References that are slow to resolve"], a: "References that don't increase an object's reference count, allowing it to be garbage collected" },
                ]
            },
            'react.js': {
                simple: [
                    { q: "What is React?", o: ["A JavaScript library for building user interfaces", "A JavaScript framework", "A programming language", "A database"], a: "A JavaScript library for building user interfaces" },
                    { q: "What is JSX?", o: ["A syntax extension for JavaScript", "A templating engine", "A CSS preprocessor", "A state management library"], a: "A syntax extension for JavaScript" },
                    { q: "How do you pass data from a parent component to a child component?", o: ["Using props", "Using state", "Using context", "Using Redux"], a: "Using props" },
                    { q: "What is a 'component' in React?", o: ["An independent, reusable piece of UI", "A JavaScript function", "A CSS class", "A variable"], a: "An independent, reusable piece of UI" },
                    { q: "Which hook is used to manage state in a functional component?", o: ["useState", "useEffect", "useContext", "useReducer"], a: "useState" },
                    { q: "How do you render a list of items in React?", o: ["Using the .map() method", "Using a for loop", "Using a while loop", "React does it automatically"], a: "Using the .map() method" },
                    { q: "What command is used to create a new React app?", o: ["npx create-react-app my-app", "npm new react-app", "react init my-app", "create-react my-app"], a: "npx create-react-app my-app" },
                    { q: "What is the virtual DOM?", o: ["A lightweight copy of the real DOM in memory", "The browser's DOM", "A shadow DOM element", "A type of component"], a: "A lightweight copy of the real DOM in memory" },
                    { q: "How do you apply a CSS class to a JSX element?", o: ["Using the className attribute", "Using the class attribute", "Using the style attribute", "Using inline styles"], a: "Using the className attribute" },
                    { q: "What is the purpose of a 'key' prop when mapping over an array?", o: ["To help React identify which items have changed, are added, or are removed", "To style the element", "To give the element an ID", "It's not required"], a: "To help React identify which items have changed, are added, or are removed" },
                ],
                medium: [
                    { q: "What is the useEffect hook used for?", o: ["Handling side effects like data fetching or subscriptions", "Managing component state", "Passing data between components", "Conditional rendering"], a: "Handling side effects like data fetching or subscriptions" },
                    { q: "What is the difference between state and props?", o: ["State is managed within the component, props are passed to it from its parent", "Props are managed within the component, state is passed to it", "They are the same", "State is for functional components, props for class components"], a: "State is managed within the component, props are passed to it from its parent" },
                    { q: "What is lifting state up?", o: ["Moving state to the closest common ancestor of components that need it", "Using a state management library", "Storing state in localStorage", "Passing state down via props"], a: "Moving state to the closest common ancestor of components that need it" },
                    { q: "What is conditional rendering?", o: ["Rendering different elements or components based on certain conditions", "Rendering components in a specific order", "Using a CSS media query", "Rendering based on props"], a: "Rendering different elements or components based on certain conditions" },
                    { q: "What is the React Context API used for?", o: ["To share state across the entire app without passing props down manually", "For making API calls", "To handle component lifecycle", "To manage component styles"], a: "To share state across the entire app without passing props down manually" },
                    { q: "What are controlled vs. uncontrolled components in forms?", o: ["A controlled component's value is controlled by React state; an uncontrolled component's value is handled by the DOM", "Uncontrolled components are faster", "Controlled components use refs", "Uncontrolled components don't have state"], a: "A controlled component's value is controlled by React state; an uncontrolled component's value is handled by the DOM" },
                    { q: "What is a Higher-Order Component (HOC)?", o: ["A function that takes a component and returns a new component with additional props or logic", "A component with many children", "A parent component", "A component that uses hooks"], a: "A function that takes a component and returns a new component with additional props or logic" },
                    { q: "What is the purpose of React.memo?", o: ["To prevent re-rendering of a component if its props haven't changed", "To memorize the component's state", "To cache API calls", "To create a memoized selector"], a: "To prevent re-rendering of a component if its props haven't changed" },
                    { q: "What is the difference between useEffect and useLayoutEffect?", o: ["useLayoutEffect runs synchronously after all DOM mutations, useEffect runs asynchronously", "useEffect is for layout changes", "There is no difference", "useLayoutEffect is deprecated"], a: "useLayoutEffect runs synchronously after all DOM mutations, useEffect runs asynchronously" },
                    { q: "What is prop drilling?", o: ["Passing props down through multiple levels of nested components", "Drilling into the props object", "A performance optimization", "A state management pattern"], a: "Passing props down through multiple levels of nested components" },
                ],
                hard: [
                    { q: "What is the useReducer hook and when would you use it over useState?", o: ["For complex state logic, when the next state depends on the previous one; it uses a reducer function", "For simple state like a boolean or string", "It's an older hook and should be avoided", "When you need to perform side effects"], a: "For complex state logic, when the next state depends on the previous one; it uses a reducer function" },
                    { q: "What is tree shaking in the context of React?", o: ["A dead-code elimination process used by bundlers like Webpack to remove unused code", "A debugging technique", "A way to structure component trees", "A React-specific feature for performance"], a: "A dead-code elimination process used by bundlers like Webpack to remove unused code" },
                    { q: "Explain React's reconciliation process.", o: ["The algorithm React uses to diff one tree with another to determine what parts need to be changed", "The process of combining state and props", "The rendering of components to the DOM", "The component lifecycle"], a: "The algorithm React uses to diff one tree with another to determine what parts need to be changed" },
                    { q: "What is code splitting in React?", o: ["Breaking code into smaller chunks which can be loaded on demand", "Splitting a component into multiple files", "Using a linter to format code", "A way to organize CSS"], a: "Breaking code into smaller chunks which can be loaded on demand" },
                    { q: "What is the purpose of the useCallback and useMemo hooks?", o: ["To memoize functions and values, respectively, to prevent unnecessary re-renders", "To manage state", "To fetch data", "To create custom hooks"], a: "To memoize functions and values, respectively, to prevent unnecessary re-renders" },
                    { q: "What are React Portals?", o: ["A way to render children into a DOM node that exists outside the parent component's DOM hierarchy", "A way to navigate between pages", "A state management solution", "A tool for server-side rendering"], a: "A way to render children into a DOM node that exists outside the parent component's DOM hierarchy" },
                    { q: "What are render props?", o: ["A technique for sharing code between components using a prop whose value is a function", "Props that determine how a component renders", "A deprecated pattern", "Props passed to the render method"], a: "A technique for sharing code between components using a prop whose value is a function" },
                    { q: "What is Server-Side Rendering (SSR) in React?", o: ["Rendering React components on the server into HTML strings and sending that to the client", "Rendering components using a server's GPU", "A way to manage server state", "A database for React"], a: "Rendering React components on the server into HTML strings and sending that to the client" },
                    { q: "What is the difference between forwardRef and useImperativeHandle?", o: ["forwardRef passes a ref through a component to a child; useImperativeHandle customizes the instance value exposed to parent components when using ref", "They are used for the same purpose", "useImperativeHandle is for class components", "forwardRef is deprecated"], a: "forwardRef passes a ref through a component to a child; useImperativeHandle customizes the instance value exposed to parent components when using ref" },
                    { q: "What is Concurrent Mode in React?", o: ["A set of new features that help React apps stay responsive by rendering component trees without blocking the main thread", "Running multiple React apps at once", "A mode for better concurrency in API calls", "A debugging mode"], a: "A set of new features that help React apps stay responsive by rendering component trees without blocking the main thread" },
                ]
            },
            c: {
                simple: [
                    { q: "What is the file extension for C source files?", o: [".c", ".h", ".cpp", ".cs"], a: ".c" },
                    { q: "Which function is the entry point for a C program?", o: ["main()", "start()", "begin()", "program()"], a: "main()" },
                    { q: "How do you declare a single-line comment in C?", o: ["// comment", "/* comment */", "# comment", "<!-- comment -->"], a: "// comment" },
                    { q: "Which function is used to print output to the console?", o: ["printf()", "cout()", "print()", "display()"], a: "printf()" },
                    { q: "What does the #include directive do?", o: ["It includes the content of a header file in the source file", "It defines a macro", "It compiles the code", "It links a library"], a: "It includes the content of a header file in the source file" },
                    { q: "Which symbol is used to get the memory address of a variable?", o: ["&", "*", "@", "#"], a: "&" },
                    { q: "How do you define a constant in C?", o: ["const int PI = 3.14;", "#define PI 3.14", "Both are valid", "constant PI = 3.14;"], a: "Both are valid" },
                    { q: "What is the purpose of a semicolon ; in C?", o: ["To terminate a statement", "To separate variables", "To start a comment", "To end a block"], a: "To terminate a statement" },
                    { q: "What is the size of int in bytes on a typical 32-bit system?", o: ["4", "2", "8", "1"], a: "4" },
                    { q: "Which operator is used to access members of a structure?", o: [". (dot)", "-> (arrow)", "# (hash)", ":: (colon)"], a: ". (dot)" },
                ],
                medium: [
                    { q: "What is a pointer in C?", o: ["A variable that stores the memory address of another variable", "A variable that stores a value", "A constant", "A function"], a: "A variable that stores the memory address of another variable" },
                    { q: "What is the difference between ++i and i++?", o: ["++i increments then returns value, i++ returns value then increments", "i++ is faster", "There is no difference", "++i is for integers only"], a: "++i increments then returns value, i++ returns value then increments" },
                    { q: "What is dynamic memory allocation in C?", o: ["Allocating memory at runtime using functions like malloc()", "Declaring variables", "Using the static keyword", "Allocating memory on the stack"], a: "Allocating memory at runtime using functions like malloc()" },
                    { q: "What is a NULL pointer?", o: ["A pointer that does not point to any memory location", "A pointer to address 0", "An uninitialized pointer", "A void pointer"], a: "A pointer that does not point to any memory location" },
                    { q: "What is the difference between a struct and a union?", o: ["struct members have their own memory locations; union members share the same memory location", "union is a type of struct", "struct is for data, union for functions", "There is no difference"], a: "struct members have their own memory locations; union members share the same memory location" },
                    { q: "What does the static keyword do for a local variable?", o: ["It preserves the variable's value between function calls", "It makes the variable global", "It makes the variable constant", "It allocates memory on the heap"], a: "It preserves the variable's value between function calls" },
                    { q: "What is a dangling pointer?", o: ["A pointer that points to a memory location that has been freed", "A NULL pointer", "A void pointer", "An uninitialized pointer"], a: "A pointer that points to a memory location that has been freed" },
                    { q: "What is the purpose of the typedef keyword?", o: ["To create an alias for a data type", "To define a new type", "To define a structure", "To create a template"], a: "To create an alias for a data type" },
                    { q: "What is recursion?", o: ["A function calling itself", "A loop", "A data structure", "A memory allocation technique"], a: "A function calling itself" },
                    { q: "What is the difference between malloc() and calloc()?", o: ["calloc() initializes the allocated memory to zero, malloc() does not", "malloc() is for arrays, calloc() is for structs", "calloc() is faster", "malloc() returns a void pointer, calloc() an int pointer"], a: "calloc() initializes the allocated memory to zero, malloc() does not" },
                ],
                hard: [
                    { q: "What are function pointers?", o: ["A pointer that stores the address of a function", "A pointer to a data structure", "A type of recursive function", "An invalid concept in C"], a: "A pointer that stores the address of a function" },
                    { q: "What does the volatile keyword signify?", o: ["The variable's value can be changed by external factors and compiler optimizations should be avoided", "The variable is constant", "The variable is stored in registers", "The variable is thread-safe"], a: "The variable's value can be changed by external factors and compiler optimizations should be avoided" },
                    { q: "What is the difference between const char *p and char * const p?", o: ["const char *p is a pointer to a constant char; char * const p is a constant pointer to a char", "They are identical", "char * const p is invalid syntax", "One is for strings, the other for single chars"], a: "const char *p is a pointer to a constant char; char * const p is a constant pointer to a char" },
                    { q: "Explain what happens in a buffer overflow.", o: ["Writing data beyond the allocated boundary of a buffer, overwriting adjacent memory", "The buffer becomes full", "An error during file I/O", "A type of memory leak"], a: "Writing data beyond the allocated boundary of a buffer, overwriting adjacent memory" },
                    { q: "What are bitwise operators in C?", o: ["Operators that perform operations on individual bits of data (e.g., &, |, ^, ~, <<, >>)", "Logical operators (&&, ||, !)", "Arithmetic operators", "Relational operators"], a: "Operators that perform operations on individual bits of data (e.g., &, |, ^, ~, <<, >>)" },
                    { q: "What is the purpose of the register storage class specifier?", o: ["A hint to the compiler to store the variable in a CPU register for faster access", "To register the variable with the OS", "To create a static variable", "To make a variable global"], a: "A hint to the compiler to store the variable in a CPU register for faster access" },
                    { q: "What is endianness?", o: ["The order in which bytes are stored in computer memory (Big-endian vs. Little-endian)", "The alignment of data in memory", "A C preprocessor directive", "A compiler setting"], a: "The order in which bytes are stored in computer memory (Big-endian vs. Little-endian)" },
                    { q: "What is a flexible array member in a C struct?", o: ["An array of unspecified size declared as the last member of a struct", "A dynamic array", "A pointer to an array", "An invalid C feature"], a: "An array of unspecified size declared as the last member of a struct" },
                    { q: "How can you create a variadic function in C (a function that accepts a variable number of arguments)?", o: ["Using the <stdarg.h> header and its macros (va_list, va_start, va_arg, va_end)", "It is not possible in C", "By using function overloading", "By passing an array of pointers"], a: "Using the <stdarg.h> header and its macros (va_list, va_start, va_arg, va_end)" },
                    { q: "What is the difference between linking and loading?", o: ["Linking combines object files into an executable; Loading copies the executable from disk into memory to run", "Loading happens before linking", "They are the same process", "Linking is for static libraries, loading for dynamic"], a: "Linking combines object files into an executable; Loading copies the executable from disk into memory to run" },
                ]
            }
        };
  // paste your full quizData object here (java, python, react.js, c)


// --- State Variables ---
let currentSubject = '';
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// --- Functions ---

function showPage(pageId) {
  [startPage, subjectsPage, levelsPage, quizPage, resultsPage].forEach(page => {
    page.style.display = page.id === pageId ? 'block' : 'none';
  });
}

function loadSubjects() {
  subjectCardsContainer.innerHTML = '';
  const subjects = Object.keys(quizData);
  const subjectDetails = {
    java: { color: 'bg-red-500', icon: '☕' },
    python: { color: 'bg-blue-500', icon: '🐍' },
    'react.js': { color: 'bg-purple-400', icon: '⚛️' },
    c: { color: 'bg-gray-600', icon: 'Ⓒ' }
  };

  subjects.forEach(subject => {
    const details = subjectDetails[subject];
    const card = document.createElement('div');
    card.className = `p-6 rounded-xl text-white shadow-md cursor-pointer ${details.color}`;
    card.innerHTML = `
      <div class="text-5xl mb-4">${details.icon}</div>
      <h3 class="text-2xl font-bold">${subject.charAt(0).toUpperCase() + subject.slice(1).replace('.js', '.js')}</h3>
    `;
    card.addEventListener('click', () => selectSubject(subject));
    subjectCardsContainer.appendChild(card);
  });
}

function selectSubject(subject) {
  currentSubject = subject;
  loadLevels();
  showPage('page-levels');
}

function loadLevels() {
  levelButtonsContainer.innerHTML = '';
  const levels = [
    { id: 'simple', name: 'Simple', color: 'bg-green-500', hover: 'hover:bg-green-600' },
    { id: 'medium', name: 'Medium', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
    { id: 'hard', name: 'Hard', color: 'bg-red-500', hover: 'hover:bg-red-600' }
  ];

  levels.forEach(level => {
    const button = document.createElement('button');
    button.className = `text-white font-bold py-4 px-10 rounded-lg shadow-lg text-xl w-full md:w-auto ${level.color} ${level.hover}`;
    button.textContent = level.name;
    button.addEventListener('click', () => startQuiz(level.id));
    levelButtonsContainer.appendChild(button);
  });
}

function startQuiz(level) {
  currentLevel = level;
  currentQuestions = [...quizData[currentSubject][currentLevel]].sort(() => 0.5 - Math.random());
  currentQuestionIndex = 0;
  score = 0;
  showPage('page-quiz');
  loadQuestion();
}

function loadQuestion() {
  selectedAnswer = null;
  nextBtn.disabled = true;

  if (currentQuestionIndex < 10) {
    const question = currentQuestions[currentQuestionIndex];
    quizTitle.textContent = `${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} - ${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}`;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/10`;
    questionText.textContent = question.q;

    optionsContainer.innerHTML = '';
    const shuffledOptions = [...question.o].sort(() => 0.5 - Math.random());

    shuffledOptions.forEach(option => {
      const button = document.createElement('button');
      button.className = 'option-btn text-left p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition duration-200';
      button.textContent = option;
      button.addEventListener('click', () => selectOption(button, option, question.a));
      optionsContainer.appendChild(button);
    });
  } else {
    showResults();
  }
}

function selectOption(button, option, correctAnswer) {
  Array.from(optionsContainer.children).forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  selectedAnswer = option;
  nextBtn.disabled = false;
}

function handleNext() {
  if (selectedAnswer === currentQuestions[currentQuestionIndex].a) {
    score++;
  }
  currentQuestionIndex++;
  loadQuestion();
}

function showResults() {
  scoreText.textContent = `${score} / 10`;
  showPage('page-results');
}

function playAgain() {
  showPage('page-start');
}

// --- Event Listeners ---
startBtn.addEventListener('click', () => {
  loadSubjects();
  showPage('page-subjects');
});

nextBtn.addEventListener('click', handleNext);
playAgainBtn.addEventListener('click', playAgain);

// Initial load
showPage('page-start');
