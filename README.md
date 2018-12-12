# Bowling Exercise NodeJs Sample

DiUS is starting a bowling club. To help with the club, we have engaged you to program a scoring system.

## Description

The features on the system are:
One player only

- In each frame, the bowler has 2 tries to knock down all the pins
- If in 2 tries, the bowler fails to knock down all the pins, their score is the sum of the \*number of pins they've knocked down in the 2 attempts
- There are 10 pins in a frame
- There are 10 frames in a match
- Don't worry about validating the number of rolls in a frame

## How to use

Execute index.js with rolls score arguments.
eg.

```
node index.js 4,6,5,0
```

## Docker

Setup amd run docker in interactive mode

```
docker build -t bowlling_score_cal .
docker run -i -t bowlling_score_cal  /bin/bash
```

 
