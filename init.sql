CREATE DATABASE IF NOT EXISTS vuttrDb;
USE vuttrDb;
CREATE TABLE tools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    link VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    tags VARCHAR(1000) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);

INSERT INTO tools (title, link, description, tags, created_at)
VALUES
    ('VS Code', 'https://code.visualstudio.com', 'Code editor with built-in debugging and Git support', '[ "editor", "programming", "development" ]', NOW()),
    ('Postman', 'https://www.postman.com', 'API development platform used for testing APIs', '[ "api", "testing", "development" ]', NOW()),
    ('Git', 'https://git-scm.com', 'Distributed version control system for tracking changes in source code', '[ "version control", "git", "development" ]', NOW()),
    ('MySQL', 'https://www.mysql.com', 'Open-source relational database management system', '[ "database", "sql", "rdbms" ]', NOW()),
    ('Docker', 'https://www.docker.com', 'Platform for developing, shipping, and running applications in containers', '[ "containerization", "deployment", "virtualization" ]', NOW()),
    ('Node.js', 'https://nodejs.org', 'JavaScript runtime environment for building server-side applications', '[ "javascript", "backend", "server" ]', NOW()),
    ('TensorFlow', 'https://www.tensorflow.org', 'Open-source machine learning framework developed by Google', '[ "machine learning", "ai", "neural networks" ]', NOW()),
    ('Kubernetes', 'https://kubernetes.io', 'Open-source container orchestration platform', '[ "containerization", "orchestration", "deployment" ]', NOW()),
    ('PyCharm', 'https://www.jetbrains.com/pycharm', 'Integrated development environment (IDE) for Python', '[ "ide", "programming", "python" ]', NOW()),
    ('Jenkins', 'https://www.jenkins.io', 'Open-source automation server for continuous integration and continuous delivery', '[ "ci/cd", "automation", "devops" ]', NOW()),
    ('Angular', 'https://angular.io', 'JavaScript framework for building dynamic web applications', '[ "javascript", "frontend", "web" ]', NOW()),
    ('Express.js', 'https://expressjs.com', 'Web application framework for Node.js', '[ "node", "javascript", "backend" ]', NOW()),
    ('Bootstrap', 'https://getbootstrap.com', 'Frontend framework for building responsive websites', '[ "frontend", "css", "ui" ]', NOW()),
    ('Unity', 'https://unity.com', 'Game development platform for creating 2D and 3D games', '[ "game development", "3d", "graphics" ]', NOW()),
    ('Spring Boot', 'https://spring.io/projects/spring-boot', 'Framework for building Java applications quickly', '[ "java", "backend", "framework" ]', NOW()),
    ('MongoDB', 'https://www.mongodb.com', 'NoSQL database program for managing data in documents', '[ "database", "nosql", "document" ]', NOW());
