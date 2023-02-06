FROM node:latest

WORKDIR /app

COPY . .

RUN npm install 
#RUN apt-get update
# RUN apt update
# Java
#RUN apt-get install -y openjdk-17-jdk
# Python
#RUN apt-get install python3.7
# GCC
#RUN apt-get -y install g++
# RUN apt install build-essential
# RUN apt-get install manpages-dev
#ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64/
#RUN export JAVA_HOME

CMD ["npm", "start"]
