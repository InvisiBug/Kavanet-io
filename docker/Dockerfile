#######################
#
# ######                         
# #     # #    # # #      #####  
# #     # #    # # #      #    # 
# ######  #    # # #      #    # 
# #     # #    # # #      #    # 
# #     # #    # # #      #    # 
# ######   ####  # ###### #####  
#
#######################
FROM node:alpine as build

# Createworking root directory inside container
WORKDIR /app 

# Install gatsby command line
RUN npm install -g gatsby-cli

# Copy package.json & package-lock.json to conatiner root
COPY package*.json ./ 

# Install project
RUN npm install

# Copy all files inside app folder to container, minus ones listed in ignore
# maybe only copy gatsby config and source
COPY . ./

# Build using gatsby build
RUN gatsby build
#######################
#
#  ######                                                           
#  #     # #####   ####  #####  #    #  ####  ##### #  ####  #    # 
#  #     # #    # #    # #    # #    # #    #   #   # #    # ##   # 
#  ######  #    # #    # #    # #    # #        #   # #    # # #  # 
#  #       #####  #    # #    # #    # #        #   # #    # #  # # 
#  #       #   #  #    # #    # #    # #    #   #   # #    # #   ## 
#  #       #    #  ####  #####   ####   ####    #   #  ####  #    # 
#
#######################
# Pull down nginx-alpine image
FROM nginx:stable-alpine

# Copy built directory to nginx folder
COPY --from=build /app/public /usr/share/nginx/html

# Start Nginx service
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:alpine as build

# WORKDIR /app 
# RUN npm install -g gatsby-cli
# COPY package*.json ./ 
# RUN npm install
# COPY . ./
# RUN gatsby build

# # RUN npm i -g nodemon
# # USER node
# # RUN mkdir /home/node/code
# # WORKDIR /home/node/code
# # COPY --chown=node:node package-lock.json package.json ./
# # RUN gatsby build

# # WORKDIR /app 
# # RUN npm install -g gatsby-cli
# # COPY package*.json ./ 
# # RUN npm install
# # COPY . ./
# # RUN gatsby build

# # Pull down nginx-alpine image
# FROM nginx:stable-alpine

# # Copy built directory to nginx folder
# COPY --from=build /app/public /usr/share/nginx/html

# # Start Nginx service
# CMD ["nginx", "-g", "daemon off;"]



# FROM node:alpine as build
# WORKDIR /app 
# RUN npm install -g gatsby-cli
# COPY package*.json ./ 
# RUN npm install

# COPY . ./

# RUN gatsby build




