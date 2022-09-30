#!/bin/bash
if [ "$#" -lt 1 ]
then
	echo No arguments supplied
fi

for i in "$@"
do
mkdir "ex$i"
i=$((i + 1))
done
