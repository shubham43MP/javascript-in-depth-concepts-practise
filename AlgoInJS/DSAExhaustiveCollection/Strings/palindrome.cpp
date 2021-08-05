#include <bits/stdc++.h>
using namespace std;

int main() {
  string s;
  cin >> s;
  int low = 0;
  int high = s.size() - 1;
  bool flag = true;
  while(low < high) {
    if(s[low] == s[high]) {
      low++;
      high--;
    } else flag = false;
    break;
  }
  if(flag) cout << "String is Palindrome";
  else cout << "String is not Palindrome";
  return 0;
}
