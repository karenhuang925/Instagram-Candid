# Instagram-Candid

## Database Schema Design

![InstagramClone](https://user-images.githubusercontent.com/92420431/201489733-5be10e4c-4b09-47fb-9fbb-3d01f205621e.png)

## API Documentation

## FEATURE 0: USER AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

- Request: endpoints that require authentication
- Error Response: Require authentication

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

- Request: endpoints that require proper authorization
- Error Response: Require proper authorization

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Forbidden",
      "statusCode": 403
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

- Require Authentication: true
- Request

  - Method: GET
  - URL: /api/users/current
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "profileName": "JohnSmith",
      "biography": "I'm really cool",
      "previewImage": null
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/login
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

- Error Response: Invalid credentials

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/signup
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "profileName": "JohnSmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "profileName": "JohnSmith",
      "email": "john.smith@gmail.com",
      "token": ""
    }
    ```

- Error response: User already exists with the specified email

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

- Error response: User already exists with the specified profile name

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "profileName": "User with that profile name already exists"
      }
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "profileName": "Profile name is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```

## FEATURE 1: POSTS FEATURE

### Get all Posts

Returns all the posts.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/posts
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Posts": [
        {
          "id": 1,
          "userId": 1,
          "caption": "Yesterday",
          "location": "San Francisco",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36"
        },
        "Media": [
        {
        "id": 1,
        "type": "Image",
        "mediaFile": "image url"
        },
        {
        "id": 2,
        "type": "Video",
        "mediaFile": "image url"
        }
        ]
      ]
    }
    ```

### Get all Posts of Users Followed by Current User

Returns all the posts of the users that the current user follows.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/users/current/followers/posts
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Posts": [
        {
          "id": 1,
          "userId": 1,
          "caption": "Yesterday",
          "location": "San Francisco",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "Media": [
            {
              "id": 1,
              "type": "Image",
              "mediaFile": "image url"
            },
            {
              "id": 2,
              "type": "Video",
              "mediaFile": "image url"
            }
          ],
          "Owner": {
            "id": 1,
            "profileName": "JohnSmith",
            "previewImage": "image url"
          }
        }
      ]
    }
    ```

### Get all Posts created by the Current User

Returns all the posts created by the current user.

- Require Authentication: true
- Request

  - Method: GET
  - URL: /api/users/current/posts
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Posts": [
        {
          "id": 1,
          "userId": 1,
          "caption": "Yesterday",
          "location": "San Francisco",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "Media": [
            {
              "id": 1,
              "type": "Image",
              "mediaFile": "image url"
            },
            {
              "id": 2,
              "type": "Video",
              "mediaFile": "image url"
            }
          ]
        }
      ]
    }
    ```

### Get details of a Post from an id

Returns the details of a post specified by its id.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/posts/:postId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "caption": "Yesterday",
      "location": "San Francisco",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "Media": [
        {
          "id": 1,
          "type": "Image",
          "mediaFile": "image url"
        },
        {
          "id": 2,
          "type": "Video",
          "mediaFile": "image url"
        }
      ],
      "Owner": {
        "id": 1,
        "profileName": "JohnSmith",
        "previewImage": "image url"
      }
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Post

Creates and returns a new post.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/posts
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "caption": "Time",
      "location": "New York City"
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "caption": "Time",
      "location": "New York City",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

- Error Response: Body validation error

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

            ```json
            {
              "message": "Validation Error",
              "statusCode": 400,
              "errors": {
                "caption": "Caption is required",
                "location": "Location is required"
              }
            }
            ```

### Edit a Post

Updates and returns an existing post.

- Require Authentication: true
- Require proper authorization: Post must belong to the current user
- Request

  - Method: PUT
  - URL: /api/posts/:postId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "caption": "Yesterday",
      "location": "San Francisco"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "caption": "Yesterday",
      "location": "San Francisco",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00"
    }
    ```

- Error Response: Body validation error

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "caption": "Caption is required",
        "location": "Location is required"
      }
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Post

Deletes an existing post.

- Require Authentication: true
- Require proper authorization: Post must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/posts/:postId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

## FEATURE 2: COMMENTS FEATURE

### Get all Comments by a Post's id

Returns all the comments that belong to a post specified by id.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/posts/:postId/comments
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "Comments": [
            {
              "id": 1,
              "userId": 1,
              "postId": 1,
              "comment": "I love this post!",
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36",
              "User": {
                "id": 1,
                "username": "JohnSmith"
              },
              //likes
              "Replies": [
                {
                "id": 1,
                "userId": 1,
                "commentId": 1,
                "reply": "I love this comment!",
                "createdAt": "2021-11-19 20:39:37",
                "updatedAt": "2021-11-19 20:39:37",
                "User": {
                  "id": 1,
                  "username": "JohnSmith"
                  }
              ]
            }
          ]
        }
        ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Comment for a Post based on the Post's id

Create and return a new comment for a post specified by id.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/posts/:postId/comments
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "comment": "I love this post!"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "postId": 1,
      "comment": "I love this post!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "body": "Comment body text is required"
      }
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

### Edit a Comment

Update and return an existing comment.

- Require Authentication: true
- Require proper authorization: Comment must belong to the current user
- Request

  - Method: PUT
  - URL: /api/comments/:commentId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "body": "I love this post!"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "postId": 1,
      "comment": "I love this post!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00"
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "body": "Comment body text is required"
      }
    }
    ```

- Error response: Couldn't find a Comment with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Comment couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Comment

Delete an existing comment.

- Require Authentication: true
- Require proper authorization: Comment must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/comments/:commentId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

- Error response: Couldn't find a Comment with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Comment couldn't be found",
      "statusCode": 404
    }
    ```

## FEATURE 3: FOLLOWERS FEATURE

### Get details of a Follower from an id

Returns the details of a follower specified by their id.

- Require Authentication: true
- Request

  - Method: GET
  - URL: /api/followers/:followerId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "followsUserId": 2
    }
    ```

- Error response: Couldn't find a Follower with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Follower couldn't be found",
      "statusCode": 404
    }
    ```

### Get all Followers of a User from an id

Returns all the followers following the specified user.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/users/:userId/followers
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Followers": [
        {
          "id": 1,
          "userId": 1,
          "followsUserId": 2,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36"
        }
      ]
    }
    ```

- Error response: Couldn't find a User with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User couldn't be found",
      "statusCode": 404
    }
    ```

### Follow a User based on the User's id

Follow a user specified by id.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/users/:userId/followers
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "followsUserId": 1
    }
    ```

- Error response: Couldn't find a User with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User couldn't be found",
      "statusCode": 404
    }
    ```

- Error response: Current User is already a follower of the user

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Current user is already a follower of the user",
      "statusCode": 400
    }
    ```

### Unfollow a User based on the User's id

Change the status of a follower of a user specified by id.

- Require Authentication: true
- Require proper Authorization: Current user must be the follower of the user
- Request

  - Method: PUT
  - URL: /api/users/:userId/followers/:followerId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "followsUserId": 2,
      "followerStatus": false
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "followsUserId": 2,
      "followerStatus": false
    }
    ```

- Error response: Couldn't find a User with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User couldn't be found",
      "statusCode": 404
    }
    ```

- Error response: If changing the status and Current User is not the follower.

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Current user must be the follower to unfollow the user",
      "statusCode": 403
    }
    ```

- Error response: If user is not a follower

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Current user is not a follower of the user",
      "statusCode": 404
    }
    ```

## FEATURE 5: PLAYLISTS FEATURE

### Get all Playlists of an Artist from an id

Returns all the playlists created by the specified artist.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/artists/:artistId/playlists
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Playlists": [
        {
          "id": 1,
          "userId": 1,
          "name": "Current Favorites",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

- Error response: Couldn't find an Artist with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Artist couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Playlist

Creates and returns a new playlist.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/playlists
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "name": "Current Favorites",
      "imageUrl": "image url"
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Current Favorites",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url"
    }
    ```

- Error Response: Body validation error

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "name": "Playlist name is required"
      }
    }
    ```

### Add a Song to a Playlist based on the Playlists's id

Add a song to a playlist specified by the playlist's id.

- Require Authentication: true
- Require proper authorization: Playlist must belong to the current user
- Request

  - Method: POST
  - URL: /api/playlists/:playlistId/songs
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "songId": 1
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "playlistId": 1,
      "songId": 1
    }
    ```

- Error response: Couldn't find a Playlist with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

- Error response: Couldn't find a Song with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

### Get details of a Playlist from an id

Returns the details of a playlist specified by its id.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/playlists/:playlistId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Current Favorites",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url",
      "Songs": [
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

- Error response: Couldn't find a Playlist with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

### Edit a Playlist

Updates and returns an existing playlist.

- Require Authentication: true
- Require proper authorization: Playlist must belong to the current user
- Request

  - Method: ?
  - URL: ?
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "name": "Current Favorites",
      "imageUrl": "image url"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Current Favorites",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00",
      "previewImage": "image url"
    }
    ```

- Error Response: Body validation error

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "name": "Playlist name is required"
      }
    }
    ```

- Error response: Couldn't find a Playlist with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Playlist

Deletes an existing playlist.

- Require Authentication: true
- Require proper authorization: Playlist must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/playlists/:playlistId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

- Error response: Couldn't find a Playlist with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

### Get all Playlists created by the Current User

Returns all the playlists created by the current user.

- Require Authentication: true
- Request

  - Method: GET
  - URL: /api/users/current/playlists
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Playlists": [
        {
          "id": 1,
          "userId": 1,
          "name": "Current Favorites",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

## FEATURE 6: MEDIA FEATURE

### Add Media to a Post based on the Post's id

Create and return new media for a post specified by id.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/posts/:postId/media
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "mediaFile": "url",
      "type": "image"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "mediaFile": "url",
      "type": "image",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

### Delete Media

Deletes existing media.

- Require Authentication: true
- Require proper authorization: Media must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/media/:mediaId
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

- Error response: Couldn't find Media with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Media couldn't be found",
      "statusCode": 404
    }
    ```

## FEATURE 7: LIKES FEATURE

### Add Likes to a Post based on the Post's id

Create and return new likes for a post specified by id.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/posts/:postId/likes
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableType": "post"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 1,
      "likeableType": "post",
      "likeStatus": true,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

### Add Likes to a Comment based on the Post's id

Create and return new likes for a comment specified by id.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/comments/:commentId/likes
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableType": "comment"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 1,
      "likeableType": "comment",
      "likeStatus": true,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

- Error response: Couldn't find a Comment with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Comment couldn't be found",
      "statusCode": 404
    }
    ```

### Add Likes to a Reply based on the Reply's id

Create and return new likes for a reply specified by id.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/replies/:replyId/likes
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableType": "reply"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 1,
      "likeableType": "reply",
      "likeStatus": true,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

- Error response: Couldn't find a Reply with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Reply couldn't be found",
      "statusCode": 404
    }
    ```

### Edit a Like

Updates and returns an existing like.

- Require Authentication: true
- Require proper authorization: Like must belong to the current user
- Request

  - Method: PUT
  - URL: /api/likes/:likeId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableId": 1,
      "likeStatus": false
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 1,
      "likeableType": "post",
      "likeStatus": false,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00"
    }
    ```

- Error response: Couldn't find a Likeable with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Likeable couldn't be found",
      "statusCode": 404
    }
    ```

### Unlike a Post based on the Post's id

Change the status of a like of a post specified by id.

- Require Authentication: true
- Require proper Authorization: Current user must be a liker of the post
- Request

  - Method: PUT
  - URL: /api/posts/:postId/likes/:likeId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableId": 2,
      "likeStatus": false
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 2,
      "likeStatus": false
    }
    ```

- Error response: Couldn't find a Post with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Post couldn't be found",
      "statusCode": 404
    }
    ```

- Error response: If changing the status and Current User is not the liker.

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "message": "Current user must be the liker to unlike the post",
          "statusCode": 403
        }
        ```

    <!-- no relationship -->

- Error response: If user is not a liker

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "message": "Current user is not a liker of the post",
          "statusCode": 404
        }
        ```

    <!-- wrong status -->

### Unlike a Comment based on the Comment's id

Change the status of a like of a comment specified by id.

- Require Authentication: true
- Require proper Authorization: Current user must be a liker of the comment
- Request

  - Method: PUT
  - URL: /api/comments/:commentId/likes/:likeId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableId": 2,
      "likeStatus": false
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 2,
      "likeStatus": false
    }
    ```

- Error response: Couldn't find a Comment with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Comment couldn't be found",
      "statusCode": 404
    }
    ```

- Error response: If changing the status and Current User is not the liker.

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "message": "Current user must be the liker to unlike the comment",
          "statusCode": 403
        }
        ```

    <!-- no relationship -->

- Error response: If user is not a liker

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "message": "Current user is not a liker of the comment",
          "statusCode": 404
        }
        ```

    <!-- wrong status -->

### Unlike a Reply based on the Reply's id

Change the status of a like of a reply specified by id.

- Require Authentication: true
- Require proper Authorization: Current user must be a liker of the reply
- Request

  - Method: PUT
  - URL: /api/replies/:replyId/likes/:likeId
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "likeableId": 2,
      "likeStatus": false
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "likeableId": 2,
      "likeStatus": false
    }
    ```

- Error response: Couldn't find a Reply with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Reply couldn't be found",
      "statusCode": 404
    }
    ```

- Error response: If changing the status and Current User is not the liker.

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "message": "Current user must be the liker to unlike the reply",
          "statusCode": 403
        }
        ```

    <!-- no relationship -->

- Error response: If user is not a liker

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "message": "Current user is not a liker of the reply",
          "statusCode": 404
        }
        ```

    <!-- wrong status -->

### Add Query Filters to Get All Posts

Return posts filtered by query parameters.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/posts
  - Query Parameters
    - page: integer, minimum: 0, maximum: 10, default: 0
    - size: integer, minimum: 0, maximum: 20, default: 20
    - caption: string, optional
    - createdAt: string, optional
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

        ```json
        {
          "Posts": [
            {
              "id": 1,
              "userId": 1,
              "mediaId": 1,
              "caption": "Yesterday",
              "location": "San Francisco",
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36",
            }
          ],
          "page": 2,
          "size": 25
        }
        ```

    <!-- include media? -->

- Error Response: Query parameter validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "page": "Page must be greater than or equal to 0",
        "size": "Size must be greater than or equal to 0",
        "createdAt": "CreatedAt is invalid"
      }
    }
    ```
