# Usage of Web Workers in Modern Web Applications

## Code Repository:
- [GitHub Repository](https://github.com/MS1034/Web-Workers-assignment.git)

## Demo:
- [Live Demo](https://text-stats.netlify.app/)

## Documentation:

### Project Description:
This application showcases the effective use of web workers. A `longText` variable containing the content of ten extensive Wikipedia articles. Users have the flexibility to adjust the repetition count and enable/disable the use of web workers, allowing them to observe performance differences. The default repetition is set to 100 times the `longText`. To view the results, click "Calculate."

![image.png](https://github.com/MS1034/Web-Workers-assignment/blob/master/image.png?raw=true)

### Running the Project:
1. **Clone the Repository:**
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command:
     ```bash
     https://github.com/MS1034/Web-Workers-assignment.git
     ```

2. **Navigate to Project Directory:**
   - Change your directory to the cloned project folder:
     ```bash
     cd Web-Workers-assignment
     ```

3. **Install Dependencies:**
   - Make sure you have Node.js and npm installed on your machine.
   - Install project dependencies by running:
     ```bash
     npm install
     ```

4. **Run the App:**
   - Once the dependencies are installed, start the development server:
     ```bash
     npm start
     ```
   - This command will launch the app locally. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

5. **Explore the App:**
   - Interact with the app by adjusting the repetition count and toggling the use of web workers.
   - Click the "Calculate" button to view the results.

6. **Stop the Development Server:**
   - To stop the development server, go back to the terminal and press `Ctrl + C`.

### Performance Benefits of Using Web Workers:

1. **Separation of large Processing from  UI:**
2. **Improved Responsiveness**
3. **Parallel Execution**

   <img src="https://www.ifourtechnolab.com/pics/Benefits-of-web-workers.webp" alt="img" style="zoom:80%;" />

<img src="https://assets-global.website-files.com/5d2dd7e1b4a76d8b803ac1aa/61c2cb132a8a4407169084f9_IlgdwjqfRdCM_X4eTtn83Io545bgiR3zinZ99vgaHg-Y0fS8wO7G4ksf9PuObY-J1rknA6_Xt7w6nf3q153I7PvKc1w1c-DETSO_z_Di4fY5iDOOipCGSrznmeSag04VqWXV6UuC.png" alt="img" style="zoom:80%;" />

### Challenges and Solutions:

1. **Challenge 1: Integrating Web Workers into React Components**

   The process of  integrating Web Workers into React components can be intricate, especially when using hooks. So I used an Interface Worker Factory to create worker. In react ordinary web worker cause issue of file import either you have create a `WorkerFactory` or put the file in public folder.

   ````
   export default class WorkerFactory {
     constructor(workerFunction) {
       const workerCode = workerFunction.toString();
       const workerBlob = new Blob([`(${workerCode})()`]);
       return new Worker(URL.createObjectURL(workerBlob));
     }
   }
   ````

   

2. **Challenge 2: Debugging Web Workers**

   Debugging Web Workers can be challenging due to their isolated execution context. Traditional debugging tools were not proved as effective as placing `console.log` frugally in both main and execution thread . 

3. **Challenge 3: Race conditions**

   Race conditions may arise when multiple threads attempt to access shared data simultaneously. In my case, This happen when user click  again and again on `calculate` button so stored all in a list and showed time to time and used a variable `isloading` as `mutex` to wait until the calls in stack are cleared.

   ````
   export const reducer = (state = {}, action) => {
     switch (action.type) {
       case "SET_ERROR":
         return { ...state, err: action.err };
       case "SET_NUMBER":
         return { ...state, num: action.num };
       case "SET_FIBO":
         return {
           ...state,
           stats: [{ id: action.id, nth: action.nth, loading: action.loading }],
         };
       case "UPDATE_FIBO": {
         state.stats[0] = {
           loading: false,
           time: action.time,
           data: action.result,
           freq: action.freq,
         };
   
         return { ...state };
       }
       default:
         return state;
     }
   };
   ````

   

### References:

1. [How to use Web Workers in ReactJS: A step-by-step guide | iFour Technolab](https://www.ifourtechnolab.com/blog/how-to-use-web-workers-in-reactjs-a-step-by-step-guide)
2. [Building an Async React Renderer with Diffing in Web Worker | by Aziz Khambati | Medium](https://medium.com/@azizhk/building-an-async-react-renderer-with-diffing-in-web-worker-f3be07f16d90)
3. [Managing Long-Running Tasks In A React App With Web Workers — Smashing Magazine](https://www.smashingmagazine.com/2020/10/tasks-react-app-web-workers/)
4. [How to Use Web Workers in React. What are web workers, why use them, and… | by Haikel Ouaghrem | JavaScript in Plain English](https://javascript.plainenglish.io/web-worker-in-react-9b2efafe309c)
5. [Web Workers in React. Multithreading in Javascript | by Atul Banwar | Medium](https://medium.com/@atulbanwar/web-workers-in-react-a2428af96992)
6. [Web workers in ReactJs - DEV Community](https://dev.to/sumankalia/web-workers-in-reactjs-4bc7)

![An Introduction to Web Workers. A web worker is a tool for… | by Siobhan  Mahoney | Medium](https://miro.medium.com/v2/resize:fit:582/1*JT6Z2FGtV2l9eEmXRLdxLA.png)





