# # Write a function that takes a message and an increment amount and 
# # outputs the same letters shifted by that amount in the alphabet. 
# # Assume lowercase and no punctuation. Preserve spaces.

# # caesar_cipher(hi,1) = "ij"
# def caesar_cipher(str, index)
#     alph = "abcdefghijklmnopqrstuvwxyz"
#     ans = []

#     str.each_char do |char|
#         ans.push(alph[(alph.index(char) + index)%26])
#     end

#     return ans.join("")
# end

# # p caesar_cipher("zx",1)

# function longestPalindromicSubstring(string) {
# 	let currentLongest = [0, 1]；
# 	for (let i = 0; i < string.length; i++){
# 		const odd = getLongestPalindromeFrom 
# 	}

# }

# # Write a method, digital_root(num). It should sum the digits of a positive integer. 
# # If it is greater than or equal to 10, sum the digits of the resulting number. 
# # Keep repeating until there is only one digit in the result, called the "digital root". 
# # Do not use string conversion within your method.


# # def digital_root(num)
# #     while num >= 10
# #         num = helper(num)
# #     end
# #     return num 
# # end

# # def helper(num)
# #     root = 0
# #     while num > 10
# #         root += num % 10
# #         num /= 10
# #     end
# #     return root
# # end

# # p digital_root(10)

# # def digital_root_recur (num)
# #   return num if num < 10
# #   digital_root_recur((num % 10) + (num / 10))
# # end

# # p digital_root_recur(356)


# # Write a function, longest_common_substring(str1, str2) that takes two strings 
# # and returns the longest common substring. 
# # A substring is defined as any consecutive slice of letters from another string.

# # Bonus: solve it in O(m * n) using O(m * n) extra space. 
# # (Hint: the solution involves dynamic programming which will be introduced later 
# # in the course.)



# def longest_common_substring(str1, str2)
#     sub1 =[]
#     sub2 =[]

#     (0..str1.length).each_char.with_index do |char, i|
#         (i..str1.length).each_char.with_index do |char, j|
            
#         end
#     end

    
        
# end
