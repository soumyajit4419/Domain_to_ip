#!/bin/bash
#Author :sbjit


echo "enter the domain name"
read dm 
ip=$(nslookup $dm)
echo "$ip"
nslookup $dm > ip.txt #saving the output to a file

 head -6 ip.txt #to get the ip address
