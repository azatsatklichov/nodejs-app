
//https://egghead.io/blog/using-branded-types-in-typescript

type User = {
    id: string
    name: string
}
type Post = {
    id: string
    ownerId: string;
    comments: Comments[]
}
type Comments = {
    id: string
    timestamp: string
    body: string
    authorId: string
}

/**
 * This define the relation between a User type and the Post where a Post can have many Comments that 
 * are written by a User.

The problem here is that the property that identifies each object: User["id"], Post["id"] and
 Comments["id"] are actually just strings therefore, there is no way for 
Typescript to catch if your are passing the wrong data, for Typescript, they are all the 
same and interchangeable. 
 */
interface Apy {
    get(url: string); //TBD
}
const api: Apy = { get() { } } //TBD

async function getCommentsForPost(postId: string, authorId: string) {
    const response = api.get(`/author/${authorId}/posts/${postId}/comments`) //TBD
    return response.data
}

const user: User = { id: '32', name: "Merdan" }
const cm: Comments = { id: "32", authorId: "eee", body: "bb", timestamp: '33' }
const post: Post = { id: '12', ownerId: "Med", comments: [cm] }

//passing arguments with wrong order is catastrophic  
const comments = getCommentsForPost(user.id, post.id) // This is OK for Typescript

/**
 * Branded Types?
A pattern evolved from the community that is commonly used for this case are Branded Types. 
The idea is to create a more specific and unique data type with greater clarity and specificity, 
this is accomplished by adding attributes or labels to an existing type to create a new, more specific type.

Brands can be added to a type using a union of the base type and an object literal with a branded property. 
For example:

This creates a new type called UserID, which is associated with the UserId brand. 
An actual variable prefixed with this brand type 
must match the specific type to be used, let’s rewrite the previous example using the new Brand helper
 */
type Brand<K, T> = K & { __brand: T }
type UserID = Brand<string, "UserId"> //like string literal type here
type PostID = Brand<string, "PostId">
type CommentID = Brand<string, "CommentId">

type User2 = {
    id: UserID;
    name: string
}
type Post2 = {
    id: PostID;
    ownerId: string;
    comments: Comments[]
}
type Comments2 = {
    id: CommentID
    timestamp: string
    body: string
    authorId: UserID
}
async function getCommentsForPost2(postId: PostID, authorId: UserID) {
    const response = await api.get(`/author/${authorId}/posts/${postId}/comments`)
    return response.data
}


const comments2 = getCommentsForPost2(user.id, post.id)
// ❌  Argument of type 'string' is not assignable to parameter of type 'PostID'.
// Type 'string' is not assignable to type '{ __brand: "PostId"; }'

/**
 * This is a good solution to the current problem, but is has some issues or downsides:

the __brand property used to “tag” the type is a “build-time” only property.
The __brand property is still shown through Intellisense, this can trigger issues 
if some developer try to use it, since it will not be present on runtime.
Is possible to duplicate branded types since there are no securities on __brand property.


A better Branded Type
The previous implementation is a naive interpretation of a branded type. 
To avoid the listed downside you should use a stronger implementation of the Brand utility type.

Instead of using a hard-coded property named __brand you can use a computed property key.
To avoid duplication of the mentioned key you can use a unique symbol
Also, write the Brand utility into its own file to prevent read access to the property.
  */
declare const __brand: unique symbol
type Brand3<B> = { [__brand]: B } 

export type Branded<T, B> = T & Brand3<B>
type UserID3 = Branded<string, "UserId">
type PostID3 = Branded<string, "PostId">
type CommentID3 = Branded<string, "CommentId">
type User3 = {
    id: UserID3;
    name: string
}

type Post3 = {
    id: PostID3;
    ownerId: string;
    comments: Comments3[]
}

type Comments3 = {
    id: CommentID
    timestamp: string
    body: string
    authorId: UserID
}

async function getCommentsForPost3(postId: PostID, authorId: UserID) {
    // fetch some data
}
const user3 = {} as User
const post3 = {} as Post
const comments3 = getCommentsForPost3(user3.id, post3.id) // ❌ This fails since `user.id` is of type UserID and no PostID as expected


//use cases 
/**
 * Custom validation
They can help with the creation of validation functions to ensure that data from the 
user comports to a standard or desired format. For instance, brands could be used to 
validate email addresses as being in a proper format:
If at any point in time the email is not of the proper brand or the input is unclear, 
the user will receive a failure message.
 */
type EmailAddress = Brand<string, "EmailAddress">
function validEmail(email: string): EmailAddress {
    // email address validation logic here
    return email as EmailAddres;
}

/**
 * Domain modeling
Branded types excel in domains modeling that can be translated into a more expressive coding experience overall. 
For instance, a car manufacturing line could use branded types for different features or kinds of cars:
 */
type CarBrand = Brand<string, "CarBrand">
type EngineType = Brand<string, "EngineType">
type CarModel = Brand<string, "CarModel">
type CarColor = Brand<string, "CarColor">

//With this approach, the type checker can now enforce better type safety:
function createCar(carBrand: CarBrand, carModel: CarModel, engineType: EngineType, color: CarColor): Car {
    // ...
}
const car = createCar("Toyota", "Corolla", "Diesel", "Red") // Error:
// "Diesel" is not of type "EngineType"

/**
 * APIs responses and Requests
API endpoints can use brands to help customize the responses and requests from API calls. 
Branded or labeled types work well in this context because the labeling comes from the API 
providers. In a hypothetical code example, here, we will
use a brand with a specific API to differentiate between successful and failed API calls:
 */
type ApiSuccess<T> = T & { __apiSuccessBrand: true }
type ApiFailure = {
    code: number;
    message: string;
    error: Error;
} & { __apiFailureBrand: true };
type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

//Now you can use this response type, avoiding misconceptions:
const response: ApiResponse<string> = await fetchSomeEndpoint();
if (isApiSuccess(response)) {
    // handle success response
}
if (isApiFailure(response)) {
    // log error message
}




///another definition
/**
 * What Are Branded Types?
Branded types in TypeScript enhance type safety by attaching a unique "brand" 
to existing types, creating a distinction at 
compile time without runtime overhead. This is particularly useful for refining 
types that are too general, like differentiating between different kinds of strings or numbers.

Creating Branded Types
To create a branded type, you typically intersect a base type with an object 
containing a unique property. This property, often represented by a unique symbol, 
ensures that the branded type is distinguishable from its base type.
 */
type BrandZ<B> = { __brand: B }
export type BrandedZ<T, B> = T & BrandZ<B>

declare const metersSymbol: unique symbol;
declare const kilometersSymbol: unique symbol;

type Meters = number & { [metersSymbol]: void };
type Kilometers = number & { [kilometersSymbol]: void };

function meters(value: number): Meters {
    return value as Meters;
}

function kilometers(value: number): Kilometers {
    return value as Kilometers;
}


