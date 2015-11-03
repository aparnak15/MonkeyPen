
# TODO on MonkeyPen
> Refer [monkeypen.com](http://monkeypen.com) to understand the arrangement of story and pages,
> also please take a look at the following features.

## Features

1. Admin uploads stories on multiple languages along with audio clips.
2. Each Page in a story is consist of an image, audio and a transcript.
3. Story can have any number of pages
4. Single Story can be in multiple languages
5. Users will be able to login using email account.
6. Users can recommend this app to other users and if the invitation get accepted, both users will get X months subscription for free.
7. User will have the ability to save their own version of the audio to the app and save it on website.
8. User will be able to browse a free set of sorties and then subscribe to continue (Freemium)

** Feature Requests **
1. Asset Download and use the app offline

### Local Install Details

user: admin

pass: lr@1001$

email: info@lightrains.com


-----

## Drupal

1. Make Story Content Type
 1. Title
 2. Description
 3. Cover Image
 4. Free or Not
 5. Pages (Field Collection) - unlimited
    1. Transcript
    2. Audio Clip
    3. Image
2. Subscription Manager - Save purchase history
 1. Custom Table - fields are;
    1. id
    2. nid - nid of the story purchased
    3. uid - uid of the user who purchased the story
    4. amount - amount the purchase has been made.
    5. created - purchase time.
3. User Clip Manager
  1. Custom Table - fields are;
    1. id
    2. uid - the logged in users id
    3. nid - nid of the story
    4. fid - fid of the user uploaded voice clip; managed file
    5. created - timestamp for the created time
4. Referral Manager
  1. Custom Table - fields are;
    1. id
    2. uid
    3. email
    4. status
    5. created
5. Drupal End points to support
  1. User log in
  2. Register
  3. File Upload


-----

## Mobile API

> APIs are also versioned, we can use `apiv0`, `apiv1` etc. for the `v0` `tag` it will be `apiv0`
> keep the `base_url` dry. A Complete `http` request will looks like `base_url`/`apivX`/`endpooint`
> Authentication is done by Drupal basic `SESSION` based and the `SESSION` can be passed to the `API`
> as `http` `header` `X-Drupal-Auth`.

Sl # | End Point | method |Core | Description
---|---|---|--- | ---
1| /user | POST | [x] | Register a new User
2| /user/login| POST | [x] | Log In an existing user
3| /user | GET | [x] | Get user Details if logged in
4| /user/reset | POST | [x] | Password reset email to user
5| /stories | GET | [x] | Get all stories
6| /stories/subs | GET | [x] | Get all subscribed Stories
7| /stories/edit | PUT | [x] | Update a clip
8| /stories/dubd | GET | [x] | Get all stories i Dubbed
9| /upload | POST | [x] | Upload a file
10| /saveclip | POST | [x] | Save a Custom Clip to Drupal
11| /refer | POST | [x] | Invite a User, referral
12| /refer | GET | [x] | Get list of users invited
