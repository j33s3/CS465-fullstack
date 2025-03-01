# CS465-fullstack
CS-465 Full Stack Development with MEAN


## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
  - **Express HTML** Our usage of Express HTML was beneficial for rendering HTML templates on the backend and sending them to the client. This worked well for loading static content to pages. Express may cause for longer reloads since the entire page needs to be refreshed after every interaction. Express is best suited for pages with low-interaction.
  - **JavaScript** in this application is in charge of server-side activity. It manages our button clicks, form submissions, and dynamically updates content on the page without full reloads. JavaScript works to connect user actions to the actual interface of the web application. JavaScript brings dynamic behavior which enables richer user experiences.
  - **Single-Page** an (SPA) is a concept where only parts of a webpage are updated without reloading the entire website. For this, we used Angular to manage these asynchronous reloads. The use of this framework enables faster page loads after the initial load. SPA's are much more fluid and make a page feel more like a desktop application. It is able to achieve this through minimal full reloads.
### Why did the backend use a NoSQL MongoDB database?
  We used a NoSQL database for many reasons. First is because of the flexibility in the schema design. Through this, we can change the structure of the data at a later date without needing to change the schema. MongoDB uses document-based storage, which data in documents like JSON. It has lots of support in JavaScript and frameworks which helps us to handle the data between the front and backend.

## Functionality
### How is JSON different from JavaScript, and how does JSON tie together the frontend and backend development pieces?
 JSON stands for JavaScript Object Notation. It is a format used for structuring data. On the other hand, JavaScript is a programming language. JSON is commonly used for sending data between client and server because of how lightweight it is, and easy to parse.

 JSON ties together front and back end, since the front end will send requests to the backend. Requests sent to the backend using JavaScript, then the backend will send data to the frontend in a JSON response. This constant usage of JSON for communication allows for efficient communication between front and back ends.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  During our development of the full-stack project. We modularized the backend, which allowed us to reuse code for other areas of the program. For instance, when developing the admin page, we were able to reuse the trip images from the client routing. When a site like this reaches larger scale, this is beneficial for keeping the code clean.

The benefits behind reusing UI elements would firstly be for consistencies’ sake. Reusing images or buttons helps to create a uniform look across the site. Reusing code also improved maintainability. For instance, if a problem occurs with image rendering, there is only one place to go to fix it all. Finally, code reuse is also more efficient for the fact there is less duplication in code.
## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
We utilized GET methods for fetching travel packages. Next, we used POST requests for adding new bookings on the admin site. Finally, we used PUT requests for performing updates to the travel packages. When testing the API authentication and authorization, testing needs to account for security. Since these requests can be handling user information, we implemented token-based authentication using JWT. We had to ensure that this was only allowing valid users to access their data and not allowing unauthorized users. Secondly, using CORS or Cross-Origin Resource Sharing, must be configured properly to prevent unauthorized domains from accessing the API.

To test the API we used manual testing through postman to ensure that we were receiving proper responses. To perform automated tests you can use Node.js to create them, Node also offers frameworks like Mocha or Chai to help.


## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This class has helped tremendously in my goals to become a full-stack developer. I have learned about the MEAN stack for web development and why it is very efficient to use. I learned how to create an SPA and implementing both admin and client sites. Furthermore, I also learned how to implement GET, POST, and PUT methods to connect communication between the front and back ends. I can't wait to take the knowledge I learned to jumpstart my learning into creating a website like this on my own!

