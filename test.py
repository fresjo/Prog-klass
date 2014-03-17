import Tkinter
from Tkinter import *
root=Tk()

def result():
	print('The sum of 2+2 is 4')

win=Frame()
win.pack()
Button(win, text='Add', command=result).pack(side=LEFT)
Label(win, text='Click Add to get the sum or Quit to Exit').pack(side=TOP)
Button(win, text='Quit', command=win.quit).pack(side=RIGHT)

win.mainloop()
