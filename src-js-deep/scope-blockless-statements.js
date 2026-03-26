
/**
 * Block-less Statements
An if or while or do or for statement can take a block or a single statement. The single
statement form is another attractive nuisance. It offers the advantage of saving
two characters, a dubious advantage. It obscures the program’s structure so that subsequent
manipulators of the code can easily insert bugs.

Programs that appear to do one thing but actually do another are much harder to get
right. A disciplined and consistent use of blocks makes it easier to get it right.
 */

if (ok)
    t = true;

//can become:
if (ok)
    t = true;
    advance();

//which looks like:
if (ok) {
    t = true;
    advance();
}


//but which actually means:
if (ok) {
    t = true;
}
advance();