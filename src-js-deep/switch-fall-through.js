
/**
 * switch Fall Through
The switch statement was modeled after the FORTRAN IV computed go to statement.
Each case falls through into the next case unless you explicitly disrupt the flow.
Someone wrote to me once suggesting that JSLint should give a warning when a case
falls through into another case. He pointed out that this is a very common source of
errors, and it is a difficult error to see in the code. I answered that that was all true,
but that the benefit of compactness obtained by falling through more than compensated
for the chance of error.

The next day, he reported that there was an error in JSLint. It was misidentifying an
error. I investigated, and it turned out that I had a case that was falling through. In
that moment, I achieved enlightenment. I no longer use intentional fall throughs.
That discipline makes it much easier to find the unintentional fall throughs.

The worst features of a language aren’t the features that are obviously dangerous or
useless. Those are easily avoided. The worst features are the attractive nuisances, the
features that are both useful and dangerous.
 */