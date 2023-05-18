# connex-one-frontend
Connex-one-express is the backend API for the Connex One technical challenge.

# Download repository
Copy the SSH key from the repository and open your terminal to the designated path you wish to copy the project into. 
<br/>
<br/>
Run the command:
``` 
git clone <SSH_KEY>
```
# Setting up the project
Once you have downloaded the project, you need to run NPM to download all the required packages for the project.
<br/>
To do so, go back to the terminal and move to the project directory and run the command:
```
npm i
```
Once the download is complete add a '.env' file to the root of the directory, this is where we will add the endpoint for the API.
<br>
The env variable is called:
```
REACT_APP_ENDPOINT=
```
NOTE: Include the forward slash at the end of URL.

To run the project:
```
npm run start
```

#Running tests

Test the project with the following command:
```
npm test
```
