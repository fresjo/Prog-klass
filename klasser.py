class Pistol(object):
	def __init__(self, antalskott):
		self.magasin=antalskott

	def skjut(self):
		print "PANG"
		self.magasin=self.magasin-1
		if self.magasin<1:
			print "Out of Ammo"
		
	def reload(self):
		print "reload"
		self.magasin=20
		
	def emptymag(self):
		print "emtymag"
		self.magasin=0
		
	def info(self):
		print "Ammo ="
		return self.magasin
		

a=2
b=2

A_pistol=Pistol(a)
print A_pistol.info()
A_pistol.skjut()
print A_pistol.info()
A_pistol.emptymag()
print A_pistol.info()
A_pistol.reload()
print A_pistol.info()


B_pistol=Pistol(b)
print B_pistol.info()
B_pistol.skjut()
B_pistol.skjut()
print B_pistol.info()
B_pistol.reload()
print B_pistol.info()
