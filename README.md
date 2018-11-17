# projetos_com_nodejs

##installing the nvm, nodejs, npm and crate-react-app

sudo apt-get install build-essential libssl-dev g++ gcc

sudo apt-get install curl

##To install or update nvm, you can use the install script using cURL:

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

or Wget:

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

##the command for update alteration in bashrc
source ~/.bashrc

##the command for list all version
nvm ls-remote

##the command for install nodejs to the v8.12.0
nvm install 8.12.0

##the command  for check default install
nvm ls

##the command for check version installed
nvm --version

##the command for check version installed the npm
npm -v

##the command for check version installed the node
node -v

##the command for install crate-react-app
npm install -g crate-react-app

##the command for check version installed the create-react-app
create-react-app --version

