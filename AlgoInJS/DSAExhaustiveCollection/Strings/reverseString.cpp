// /**
//  * Leet code
//  */

// function reverseString(s) {
//   let low = 0
//   let high = s.length - 1
//   while(low < high) {
//     const temp = s[low]
//     s[low] = s[high]
//     s[high] = temp
//     console.log('asasas', s[low], s[high], temp)
//     low++
//     high--
//   }
//   return s
// }

// console.log('Reversed String is ', reverseString(s))

#include <bits/stdc++.h>
using namespace std;

int main() {
  string s;
  cin >> s;
  int low = 0;
  int high = s.size() - 1;
  while(low < high) {
    char temp = s[low];
    s[low] = s[high];
    s[high] = temp;
    low++;
    high--;
  }
  cout << s << '\n';
}
