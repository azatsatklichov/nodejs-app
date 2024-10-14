
/**
 * The prevalence of string types and the type information in comments
(repeating) are strong indications that this interface isn’t quite right
 */
interface Album {
    artist: string;
    title: string;
    releaseDate: string; // YYYY-MM-DD
    recordingType: string; // E.g., "live" or "studio"
}

const kindOfBlue: Album = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: 'August 17th, 1959', // Oops!
    recordingType: 'Studio', // Oops!
}; // OK

/**
The releaseDate field is incorrectly formatted (according to the comment)
and 'Studio' is capitalized where it should be lowercase. But these values
are both strings, so this object is assignable to Album and the type checker
doesn’t complain.

Can you make the types narrower to prevent these sorts of issues?
With these changes, TypeScript is able to do a more thorough check for
errors:
 */

type RecordingType = 'studio' | 'live';
interface Album2 {
    artist: string;
    title: string;
    releaseDate: Date;
    recordingType: RecordingType;
}

const kindOfBlue2: Album = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: new Date('1959-08-17'),
    recordingType: 'Studio'
    // ~~~~~~~~~~~~ Type '"Studio"' is not assignable to type 'RecordingType'
};

