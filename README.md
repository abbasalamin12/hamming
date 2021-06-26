# Hamming

Calculate the [Hamming Distance](https://en.wikipedia.org/wiki/Hamming_distance) between two DNA strands.

Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing, which they achieve by dividing into daughter cells. In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!

When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "Hamming Distance".

We read DNA using the letters C,A,G and T. Two strands might look like this:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

They have 7 differences, and therefore the Hamming Distance is 7.

The Hamming Distance is useful for lots of things in science, not just biology, so it's a nice phrase to be familiar with :)

# Implementation notes

The Hamming distance is only defined for sequences of equal length, so an attempt to calculate it between sequences of different lengths should
not work. The general handling of this situation (e.g., raising an exception vs returning a special value) may differ between languages.

# Setup

First ensure you have [NodeJS](https://nodejs.org/) installed. Then change to the folder containing this `README.md` (likely called `hamming`) when running the following commands.

## Exercise Requirements

Install dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the supplied test suite (`hamming.spec.js`), only the first test will run by default.

Once you get a test passing, you can enable the next one by changing `xtest` to`test`.

## Create a UI

As well as getting the tests to pass, you should also create a page that:
* includes your script
* contains a form that allows a user to enter two strings
* displays the result of supplying the two strings to the `compute` function


## Credits

The [Calculating Point Mutations problem at Rosalind](http://rosalind.info/problems/hamm/).
Adapted from [exercism.io](https://exercism.io/). MIT licensed as per [the original work](https://github.com/exercism/javascript/blob/main/LICENSE).

