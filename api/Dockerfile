FROM debian:stretch
LABEL maintainer="Panagiotis Skarvelis"

### Disable Build in Services
    ENV ENABLE_SMTP=FALSE \
        ENABLE_CRON=FALSE 


### Dependencies Addon
    RUN apt-get update && \
        apt-get install -y --no-install-recommends \
               apt-transport-https \
               bash \
               ca-certificates \
               curl \
               dirmngr \
               gnupg \
               less \
               logrotate \
               msmtp \
               nano \
               net-tools \
               procps \
               tzdata \
               vim-tiny \
               mc \
               htop

### Add user 
    RUN adduser --home /home/nodejs --gecos "Node User" --disabled-password nodejs

### add depentecies
    RUN curl --silent https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
       echo 'deb https://deb.nodesource.com/node_9.x stretch main' > /etc/apt/sources.list.d/nodesource.list && \
       echo 'deb-src https://deb.nodesource.com/node_9.x stretch main' >> /etc/apt/sources.list.d/nodesource.list && \
       apt-get update && \
       apt-get install -y \
               nodejs \
               yarn && \
       apt-get clean && \
       apt-get autoremove -y && \
       rm -rf /var/lib/apt/lists/*

### Install Runtime Dependencies
    RUN apt-get update && \
        apt-get install -y \
                expect \
                jq \
                sudo && \
       apt-get -y autoremove && \
       apt-get clean && \
       rm -rf /var/lib/apt/lists/*

### Create application directory
    RUN  mkdir /app

### Networking Configuration
    EXPOSE 3001 

### Add files
    ADD start.sh /
    RUN chmod +x /start.sh

### CMD
    CMD ["/start.sh"] 
