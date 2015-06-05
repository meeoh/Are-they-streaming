from bs4 import BeautifulSoup
import requests

##COPY THE OUTPUT, RUN IT IN TERMINAL

writeFile = open('leaguePlayers.txt','w')


r = requests.get('http://lol.gamepedia.com/Players_(All)')


soup = BeautifulSoup(r.text)

entry = soup.find_all(class_='row-odd')


for line in entry:

	if line.find(class_='external') is None:
		continue
	if line.find(class_='sprite-text') is None:
		continue

	if 'twitch' not in line.find(class_='external')['href']:
		continue

	name = line.find('a').get_text()
	team = line.find(class_='sprite-text').get_text()
	twitch = line.find(class_='external')['href']
	write = "{\'name\':\'" + name + ' (' + team + ')' + "\', 'link':\'" + twitch + "\'},"
	#writeFile.write(write)
	print write


r = requests.get('http://lol.gamepedia.com/Players_(All)/Page_2')


soup = BeautifulSoup(r.text)

entry = soup.find_all(class_='row-odd')


for line in entry:

	if line.find(class_='external') is None:
		continue
	if line.find(class_='sprite-text') is None:
		continue

	if 'twitch' not in line.find(class_='external')['href']:
		continue

	name = line.find('a').get_text()
	team = line.find(class_='sprite-text').get_text()
	twitch = line.find(class_='external')['href']
	write = "{\'name\':\'" + name + ' (' + team + ')' + "\', 'link':\'" + twitch + "\'},"
	print write
	#writeFile.write(write)