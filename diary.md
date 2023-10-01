### 1. 10. 2023
- reviewing the latest progress in 4.16*
- finished 4.16*

### 9. 8. 2023
- 4.16*: bloglist expansion, prepared test file for user tests, added helper, started first user test

### 30. 7. 2023
- Continue 4d Token authentication - Added controller for login.
- Added project readme.md for Notes BE.
- 4d Limiting creating new notes to logged-in users.
- 4d Problems of Token-based authentication - token expiration.
- 4.15: bloglist expansion, step3 - adding and getting users in blog-list.
- 4.16*: bloglist expansion, username/pass validations started.

### 28. 7. 2023
- 4c Populate, finished 4c.
- Started 4d Token authentication.
 - npm install jsonwebtoken

### 23. 7. 2023
- Adding the user to the note.

### 22. 7. 2023
- Route handler for getting users.

### 19. 7. 2023
- Creating users - added tests, split tests for users and notes into "describe" blocks.
- Debugging tests - they fail on beforeEach (missing MongoDB test donfig in .env).
- Added module mongoose-unique-validator.
- /TODO route handler for getting users.

### 17. 7. 2023
- 4c Mongoose schema for users, added references to schemas.
- Creating users - install bcrypt, added users router. /TODO test

### 10. 7. 2023
- 4b Refactoring tests using describe blocks.
- Exercise 4.13 - added delete and its test.
- Exercise 4.14 - added updating likes of a note and its test.
- Continue reading 4c User administration.

### 9. 7. 2023
- Exercise 4.8
 - create first test, test_helper.
 - Changed routeHandler to async.
- Exercise 4.9 - Using Jest's toBeDefined to check for a name of a property.
- Exercise 4.10 - Test that POST creates a blog post in DB (length and title check).
- Exercise 4.11* - Allowing adding blogs without likes property, defaulting to 0 and added a test for it.
- Exercise 4.12* - Added logic and tests to return 400 if attempted to send a blog without a title or url.
- Started reading 4c User administration.

### 8. 7. 2023
- Optimizing the beforeEach function
 - Running an async function with other async functions inside can cause problems.
  The top async function doesn't wait for the lower ones to finish executing.
 - Promise.all transforms an array of promises into a single promise.
  - Will be fulfilled once every of its promises is resolved.
- A true full stack developer's oath.

### 6. 7. 2023
- async/await in the backend, More tests and refactoring the backend.
- Learned try/catch, added test helper.
- Error handling and async/await.
- Adding tests before refactoring controllers to await.
- Eliminating the try-catch, added express-async-errors library.

### 2. 7. 2023
- Reading 4b, Test environment, installed jest (dev), cross-env, added .env.
- Supertest, created tests, test db, added jest rule to eslint, edited config for different environments.
- Reading Initializing the database before tests, Running tests one by one, async/await.

## Archive
*30. 6. 2023*
- checked 4.7, commited.
- Started reading 4b, Test environment.

*24. 6. 2023*
- started 4.7*

*18. 6. 2023*
- 4.6*: helper functions and unit tests, step4.
 - Created function and its test to find an author with the most blogs from the blogs array.
 - Solved without lodash.
 - Checked the solution using lodash with ChatGPT.

*17. 6. 2023*
- Exercise 4.3. - basic dummy function and its test.
- 4.4: helper functions and unit tests, step2.
 - sum of attributes of an array of objects using reduce().
- 4.5*: finding an object with a highest value of its attribute from an array.
 - Changing returned structure of an object.

*15. 6. 2023*
- run npm test, tried a success and a failed test.
- Added test for average, fixed average for 0.

*7. 6. 2023*
- Testing Node apps
 - package.json edit, test script created.
 - test.js added (using expect.toBe).
- Added ESlint.

*3. 6. 2023*
- 4.2: Refactor into modules: middleware, controllers, models.
- added diary.md to git.
- Reading about next() and Router().
- Started with Testing Node apps.

*1.-2. 6. 2023*
- Setting up SSH on Dell laptop.

*28. 5. 2023*
- 4.2: Refactor into modules: logger, config, app.

*27. 5. 2023*
- checked the latest progress.
- refactored the structure according to Project structure.
- read Note on exports.
- Exercise 4.1 done - init blog app.
- Exercise 4.2 - refactor into modules - started.

*11. 5. 2023*
- finished Lint for notes-be
- Exercise 3.22
    - added Lint to the project, set up configuration
    - fixed index.js
- finished part3
- Started part4 - Project structure.

*5. 5. 2023*
- Worked with notes-be.
- Changed Lint configuration.
- Started fixing index.js according to Lint.

*23. 4. 2023*
- I checked if the exercises 3.20-21 where succesfully done.
- I deployed to fly.io as per 3.21.
- Started with reading _Lint_
    - Added lint configuration. Finished before checking index.