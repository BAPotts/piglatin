# Pig Latin Translator
 
  ### By Beverly Potts
 
## Description
 
  This website takes a user-inputted word, translates, and displays it in Pig Latin.
 
## Languages & Technologies Used:
 
  ### Programming Languages & Libraries
  * HTML, JQuery, JavaScript
 
  ### Operating Systems & Programs
  * VS Code
 
## Installation
 
  1. Download a web browser and navigate to https://github.com/BAPotts/piglatin.
  3. Click the green "Clone or download" button and choose "Download ZIP".
  5. Use a file extractor like WinZip to unzip the folder.
  6. Open the directory containing the extracted files.
  7. Double-click the "index.html" file to run the program through your web browser.
 
## Specifications

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
    * Example Input: "1"
    * Example Output: "1"
 
  * The program does nothing to single-letter alphabetical characters that are consonants.
    * Example Input: "b"
    * Example Output: "b"
 
  * The program does nothing to single-letter alphabetical characters that are consonants, regardless of capitalization.
    * Example Input: "B"
    * Example Output: "B"
 
  * The program recognizes vowels to which Pig Latin rules apply (a, e, i, o, u).
    * Example Input: "a"
    * Example Output: "1"
    * Example Input: "b"
    * Example Output: "b"
 
  * The program recognizes vowels to which Pig Latin rules apply, regardless of capitalization (a, A; e, E; i, I; o, O; u, U)
    * Example Input: "A"
    * Example Output: "1"
    * Example Input: "B"
    * Example Output: "B"
 
  * The program does nothing to single-letters consisting of a vowel if they are not "a", "i", or "o".
    * Example Input: "a"
    * Example Output: "1"
    * Example Input: "e"
    * Example Output: "e"
 
  * The program does nothing to single-letters consisting of a vowel if they are not "a", "i", or "o", regardless of capitalization.
    * Example Input: "A"
    * Example Output: "1"
    * Example Input: "E"
    * Example Output: "E"
  
  * The program adds "way" to single-letter words that consist of a vowel.
    * Example Input: "a"
    * Example Output: "away"
 
  * The program adds "way" to single-letter words that consist of a vowel, regardless of capitalization.
    * Example Input: "A"
    * Example Output: "Away"
 
  * The program adds "way" to multiple-letter words that begin with a vowel.
    * Example Input: "aardvark"
    * Example Output: "aardvarkway"
 
  * The program adds "way" to multiple-letter words that begin with a vowel, regardless of upper- or lower-case capitalization of the first letter.
 
  * The program adds "way" to multiple-letter words that begin with a vowel, regardless of capitalization of the entire word.
 
  * The program adds "way" to multiple-letter words that begin with a vowel, regardless of mixed capitalization.
 
  * If a multiple-letter word begins with a consonant, the program removes the first letter, places it at the end of the word, and adds "ay" to the end of the word.
 
  * If a multiple-letter word begins with a consonant, the program removes the first letter, places it at the end of the word, and adds "ay" to the end of the word, regardless of upper- or lower-case capitalization of the first letter of the word.
 
  * If a multiple-letter word begins with a consonant, the program removes the first letter, places it at the end of the word, and adds "ay" to the end of the word, regardless of upper- or lower-case capitalization of the entire word.
 
  * If a multiple-letter word begins with a consonant, the program removes the first letter, places it at the end of the word, and adds "ay" to the end of the word, regardless of mixed capitalization.
 
  * The program treats "y" as a consonant whenever it is at the beginning of a word.
 
  * The program treats "y" as a consonant whenever it is at the beginning of a word, regardless of upper- or lower-case capitalization of the first letter of the word.
 
  * The program treats "y" as a consonant whenever it is at the beginning of a word, regardless of upper- or lower-case capitalization of the entire word.
 
  * The program treats "y" as a consonant whenever it is at the beginning of a word, regardless of upper- or lower-case capitalization of mixed capitalizatioin.
 
  * If a word begins with "qu", the program will remove the first two letters, place them at the end of the word, and add "ay".
 
  * If a word begins with "qu", the program will remove the first two letters, place them at the end of the word, and add "ay", regardless of upper- or lower-case capitalization of the first letter of the word.
 
  * If a word begins with "qu", the program will remove the first two letters, place them at the end of the word, and add "ay", regardless of upper- or lower-case capitalization of the entire word.
 
  * If a word begins with "qu", the program will remove the first two letters, place them at the end of the word, and add "ay", regardless of upper- or lower-case capitalization of mixed capitalization.
 
  * If a word has "q" as its second letter, the program will remove the first three letters of the word, place them at the end of the word, and add "ay".
 
  * If a word has "q" as its second letter, the program will remove the first three letters of the word, place them at the end of the word, and add "ay", regardless of upper- or lower-case capitalization of the first letter of the word.
 
  * If a word has "q" as its second letter, the program will remove the first three letters of the word, place them at the end of the word, and add "ay", regardless of upper- or lower-case capitalization of the entire word.
 
  * If a word has "q" as its second letter, the program will remove the first three letters of the word, place them at the end of the word, and add "ay", regardless of mixed capitalization.
 
  * If a word begins with multiple consonants, the program removes all consonants preceding the first vowel, places them at the end of the word, and adds "ay".
 
  * If a word begins with multiple consonants, the program removes all consonants preceding the first vowel, places them at the end of the word, and adds "ay", regardless of upper- or lower-case capitalization of the first letter of the word.
 
  * If a word begins with multiple consonants, the program removes all consonants preceding the first vowel, places them at the end of the word, and adds "ay", regardless of upper- or lower-case capitalization of the entire word.
 
  * If a word begins with multiple consonants, the program removes all consonants preceding the first vowel, places them at the end of the word, and adds "ay", regardless of mixed capitalization.
 
  * If the first letter of a word is a capitalized consonant and the following letters are all lower-case, the program will remove the first letter, transform it to lower-case, place it at the end of the word, add "ay" to the end of the word, and capitalize the first letter of the resulting Pig Latin word.
 
  * If the first letter of a word is a capitalized "Q" and the following letters are all lower-case, the program will remove the first two letters, transform the first letter to lower-case, place the first two letters at the end of the word, add "ay" to the end of the word, and capitalize the first letter of the resulting Pig Latin word.
 
  * If the first letter of a word is capitalized, the second letter of the word is "q", and the remaining letters of the word are lower-case, the program will remove the first three letters, transform the first letter to lower-case, place the first three letters at the end of the word, add "ay" to the end of the word, and capitalize the first letter of the resulting Pig Latin word.
 
## Known Bugs
 
  * Unfinished. Only translates single words beginning with vowels. 
### Contributors
 
  * Beverly Potts
  * Taylor Somers
 
### License
 
This website is licensed under the GNU General Public License GPLv3. (C) 2020 Beverly Potts. All rights reserved.