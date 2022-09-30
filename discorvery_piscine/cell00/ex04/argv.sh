#/bin/bash

if [ "$#" -lt 1 ];
then
	echo "no args"
fi

if [ "$#" -gt 3 ];
then
	echo "too many args"
fi

if [ "$#" -gt 0 ] && [ "$#" -lt 4 ]
then
	echo $1
	echo $2
	echo $3
fi
