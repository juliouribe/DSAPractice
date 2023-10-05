res = ''
sample.each_char { |c| res = c + res }
puts res
# Output: madA m'I ,madaM

def reverseString(str)
  res = ''
  str.each_char { |c| res = c + res }
  res
end

sample = "Madam, I'm Adam"
puts reverseString(sample) # Output: madA m'I ,madaM
