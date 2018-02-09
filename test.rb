=begin
Multiline
Comments
=end

books = {}
books["a"] = :splendid
books["b"] = :good
books["c"] = :nice

print books
print "\n"
print books["c"]
print "\n"
print Dir.entries "/"
print "\n"
print "pre", "event"
print "\n"

puts 'Hello World!'

variable = 1
variable ||= "default value"

puts variable
p 'test'

def g *args
	args
end

def f arg
	arg
end

x,y,z = [true, 'two', nil]

if a = f(x) and b = f(y) and c = f(z) then
	d = g(a,b,c)
end

p d


p 'Hello ' * 5
p 'It\'s like'
p 'I like ' + 'u'

ls = `ls -la`.lines.to_a

ls.each do |l|
	print l
end

var1 = 5
var2 = '9'
p var1 + var2.to_i

var2<<9.to_s
p var2

var2 = <<END_STR
newline
for string
END_STR

p var2

print 2.even?
3.times { puts }

#string = "Growing up in a one-room home in Ghana, Akwasi Frimpong never envisaged he would one day race down a South Korean mountain with his chin resting three inches above the ice"
#string = "It's been a journey fraught with setbacks. Along the way, Frimpong has been a 200m sprinter, a bobsled brakeman, a student and an entrepreneur -- but always a dreamer that refuses to accept defeat"
string = "Analis juga berpendapat bahwa memperbaiki hubungan dengan Korea Selatan bisa dijadikan jembatan untuk mendekati Amerika Serikat"
#puts string
string = string.split(" ")

final_word = []
string.each do |word|
	if word.length > 3
		w = word.split("")
		w = w[1,w.length-2].permutation(w.length-2).map(&:join)
		final_word.push(word[0] + w[w.length/2] + word[word.length-1])
	else
		final_word.push(word)
	end
end
puts final_word.join(" ")
3.times { puts }

print ('a'..'f').to_a.combination(5).map(&:join)
puts
