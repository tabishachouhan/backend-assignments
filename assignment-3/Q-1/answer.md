# Understanding Project Management in NodeJS

## a. Package Managers

### **What is a Package Manager?**

A package manager is a tool that allows developers to install, update, remove, and manage external libraries (packages) used in a project.

### **Why do we need package managers in backend development?**

* To easily use third‑party libraries
* To avoid writing everything from scratch
* To keep track of versions of each package
* To maintain consistency across different environments

### **Problems faced if package managers are not used**

* Manual downloading of packages
* No version control of dependencies
* Hard to share projects with others
* Increased chances of errors when deploying

---

## b. NPM (Node Package Manager)

### **What is NPM?**

NPM is the default package manager for Node.js. It helps install and manage JavaScript libraries required for backend projects.

### **Why is NPM important for Node.js applications?**

* Provides access to thousands of ready‑made packages
* Makes project setup faster and easier
* Acts as a central tool for Node.js ecosystem

### **How NPM helps in managing dependencies**

* Automatically installs required packages
* Stores package names and versions in `package.json`
* Downloads all dependencies inside `node_modules`
* Generates `package-lock.json` to lock versions

---

## c. Backend Project Initialization

### **Command to initialize a backend (Node.js) project**

```
npm init
```

### **What `npm init` does?**

* Starts an interactive setup process
* Asks for project name, version, description, entry file, etc.
* Creates `package.json`

### **What `npm init -y` does?**

* Generates `package.json` with default values
* Saves time for quick project setup

---

## d. Files and Folders Created After Project Initialization

### **1. package.json**

**Purpose:**

* Acts as the project’s configuration file
* Stores project details (name, version, author)
* Stores list of dependencies
* Stores scripts like `start`, `test`, etc.

**Importance:**

* Required for package management
* Helps other developers understand your project setup

---

### **2. node_modules**

**Purpose:**

* Contains all installed packages and their dependencies

**Importance:**

* Necessary for project execution on local system

---

### **3. package-lock.json**

**Purpose:**

* Locks exact versions of packages installed
* Ensures consistent installs for all developers

**Importance:**

* Prevents version conflicts
* Improves reliability of deployments

---

## Files that should NOT be pushed to GitHub

### **❌ node_modules**

**Reason:**

* Too large in size
* Can be recreated anytime using `npm install`
* Causes unnecessary storage usage

### **❌ .env (environment files)**

**Reason:**

* Contains sensitive data like passwords, API keys

---

## Files that MUST be committed

### **✔ package.json**

* Required for others to know which dependencies are used
* Essential for running `npm install`

### **✔ package-lock.json**

* Ensures everyone installs same dependency versions

### **✔ Source code files** (controllers, routes, server.js, etc.)

* Includes actual logic of your backend

---

