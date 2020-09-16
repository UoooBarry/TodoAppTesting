#!/usr/bin/python

import sys
import os
import subprocess

def install_deps():
    os.system("cd vue-to-do && npm install")
    os.system("cd To-Do-App && npm install")
    print('Install dependices')

def run_backend():
    subprocess.call("cd To-Do-App && start npm run start", shell=True)
    print('Run the backend server')

def run_frontend():
    subprocess.call("cd vue-to-do && start npm run serve", shell=True)
    print('Run the frontend server')


if(len(sys.argv) <= 1):
    flag = True
    while flag:
        print("/*****************************")
        print("*     @AUTHOR UOOOBARRY     *")
        print("* PYTHON CLI FOR TO DO APP. *")
        print("*****************************/")
        print('Select an option you want to run: ')
        print('0. Install dependices ')
        print('1. Run backend ')
        print('2. Run frontend ')
        print('3.Stop ')
        option = input()
        if option == '0':
            install_deps()
        elif option == '1':
            run_backend()
        elif option == '2':
            run_frontend()  
        elif option == '3':
            flag = False
        else:
            print('Flag error')

else:
    for index,arg in enumerate(sys.argv[1::]):
        if(arg == '--install'):
            install_deps()
        elif(arg == '--help'):
            print('     --install: Install dependencies')
            print('     --run: Run the app')
        elif(arg == '--run'):
            run_backend()
            run_frontend()
        else:
            print(arg)
            print('Unknown arguments, try run --help for help.')




