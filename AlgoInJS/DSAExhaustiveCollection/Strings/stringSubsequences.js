/**
 * Given a string, we have to find out all subsequences of it. A String is a subsequence of a given
 * Input : abc
 * Output : a, b, c, ab, bc, ac, abc
 */
 function stringSubsequences(input, output) {
     if (input.length==0) {
         console.log(output)
         return
     }
     stringSubsequences(input.substring(1), output);
     stringSubsequences(input.substring(1), output + input[0]);
 }

console.log('String Subsequences are => ', stringSubsequences('ATACTCGGA', ''))
