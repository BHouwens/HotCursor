help:
	@echo
	@echo "  \033[34mstart\033[0m : Starts the app up via the server"
	@echo "  \033[34minstall\033[0m : Installs npm dependencies and builds the app via webpack"
	@echo "  \033[34mbuild\033[0m : Builds both the client and server sides of the app via webpack"
	@echo "  \033[34mbuild-client\033[0m : Builds only the client side of the app via webpack"
	@echo "  \033[34mbuild-server\033[0m : Builds only the server side of the app via webpack"
	@echo
  
start:
	@echo
	@echo "/*------ Starting the app up ------*/"
	@echo
	@npm start

install:
	@echo
	@echo "/*------ Installing JavaScript resources ------*/"
	@echo
	@npm install
	@make build
	@echo
	@echo "/*------ All done! ------*/"
	@echo

build:
	@make build-client
	@make build-server

build-client:
	@echo
	@echo "/*------ Building the client side of the app via webpack ------*/"
	@echo
	@npm run build:client
	@echo

build-server:
	@echo
	@echo "/*------ Building the server side of the app via webpack ------*/"
	@echo
	@npm run build:server
	@echo


.PHONY: start build build-client build-server install help