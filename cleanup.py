import re

writeFile = open('newstreamers.txt','w')
with open('streamers.txt') as f:
	for line in f:
		foo = line.split(': ');
		# link = re.search("(?P<url>https?://[^\s]+)", line).group("url")
		# link = line.replace(' ', '')[:-5]
		writeFile.write('{\'name\': \'' + foo[0] + '\', \'link\':\''  + foo[1].rstrip().split('[', 1)[0] + '\'},\n') ;
	
		

		print foo
writeFile.close()




#print re.search("(?P<url>https?://[^\s]+)", myString).group("url")