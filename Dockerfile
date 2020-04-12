# Use the official node image.
FROM node:10.19.0

# Install ubuntu cookie cutter module.
RUN apt-get update && \
    apt -y install python3 && \
    apt -y install python-pip && \
    apt-get clean

# Add an unprivileged user which the app will run as.
RUN useradd --user-group --create-home --shell /bin/bash lukhanyo-ui

# Create and change ownership of the working directory
RUN mkdir /home/lukhanyo-ui/lukhanyo-ui
RUN chown -R lukhanyo-ui /home/lukhanyo-ui/lukhanyo-ui

# Set the image working directory.
WORKDIR /home/lukhanyo-ui/lukhanyo-ui

# Expose the application port.
EXPOSE 4200

# Copy the api files.
COPY . ./

RUN npm install

RUN chown -R lukhanyo-ui ./

# Switch user.
USER lukhanyo-ui

# Start the application.
CMD [ "npm", "run", "start" ]
