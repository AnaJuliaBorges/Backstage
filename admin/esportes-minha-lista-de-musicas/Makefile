.PHONY: setup build run lint test coverage migrate-admin

NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

# colors
NO_COLOR=\x1b[0m
RED_COLOR=\033[0;31m
GREEN_COLOR=\033[0;32m
YELLOW_COLOR=\033[1;33m

setup:
	@$(PKG_MANAGER) install --registry https://artifactory.globoi.com/artifactory/api/npm/npm-repos

build:
	@$(PKG_MANAGER) run build

run:
	@$(PKG_MANAGER) start

lint:
	@$(PKG_MANAGER) run lint

test:
	@$(PKG_MANAGER) run test

coverage:
	@$(PKG_MANAGER) run coverage
