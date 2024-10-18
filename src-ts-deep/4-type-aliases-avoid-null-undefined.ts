/**
 * In this code, is the optional chain (?.) necessary? 
 * Could user ever be
null?
 */
function getCommentsForUser(comments: readonly Comment[], user: User) {
    return comments.filter(comment => comment.userId === user?.id);
}
/**
 * 
Even assuming strictNullChecks, it’s impossible to say without seeing
the definition of User. If it’s a type alias that allows null or undefined,
then the optional chain is needed:
 */
type User2 = { id: string; name: string; } | null;

//On the other hand, if it’s a simple object type, then it’s not:
interface User {
    id: string;
    name: string;
}

/**
 * If you must include null in a type alias for some reason, do readers of your code a favor and use a name that’s unambiguous:
 */
type NullableUser = { id: string; name: string; } | null;
type NormUser = { id: string; name: string; };

let someUser: NullableUser | NormUser;

/**
 * But why do that when User|null is a more succinct and universally
recognizable syntax?
 */
function getCommentsForUser2(comments: readonly Comment[], user: User2 | null) {
    return comments.filter(comment => comment.userId === user?.id);
}