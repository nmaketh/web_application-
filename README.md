Project Name: TaskMaster - Simplify Your Project Management
Introduction
TaskMaster is a user-friendly web application designed to revolutionize the management of personal projects and tasks.
With a minimalistic yet powerful interface, TaskMaster allows users to effortlessly create, manage, and track their projects and tasks in one centralized platform.
Leveraging modern technology and efficient development practices, TaskMaster is built to be scalable, ensuring smooth deployment and seamless user experience.

#Project Structure

This project comprises the following files:

index.html: HTML structure of the web application.
styles.css: CSS styles for the web application.
app.js: JavaScript code powering the web application.

#How to Run the Application Locally

1. Clone the repository: git clone https://github.com/nmaketh/web_applicaton.git
2. Navigate into the project directory: cd repository
3. Open index.html in your preferred web browser.
4. Install the dependencies: `npm install`
5. Start the application: `npm start`
6. Open your browser and visit `http://localhost:8080`

#Building the Docker Image

Ensure Docker is installed on your machine.
Navigate to the project directory.
Build the Docker image: docker build -t my-app .

#Running a Docker Container

Run the Docker container: docker run -p 8080:80 my-app
Access the application through your browser at http://localhost:8080

#Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

Utilized plain HTML, CSS, and JavaScript to keep the application lightweight and easy to deploy.
Chose Docker for containerization to ensure seamless deployment and scalability.
Prioritized simplicity and user-friendliness in the application design.

#Docker Hub

The Docker image for TaskMaster is hosted on Docker Hub. You can access it .https://hub.docker.com/repository/docker/nmaketh/web_application/tags?page=1&ordering=last_updated

#Presentation Deck

You can find the presentation deck about the TaskMaster implementation here.

Link to Presentation Deck
https://www.canva.com/design/DAGBMkqCX_8/Qw-Dbnn5KBP_WQgdWQf_sw/edit?utm_content=DAGBMkqCX_8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
