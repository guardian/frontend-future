check-env:
	@yarn check:env -s

install: check-env
	@yarn install -s

reinstall: check-env
	@rm -rf ./node_modules
	@yarn install -s

prep: check-env install

# --------------

lint: prep
	@yarn lint -s

lint-fix: prep
	@yarn lint -s --  --fix

# --------------

test: prep
	@yarn test -s

test-watch: prep
	@yarn test -s -- --watch

clean:
	@rm -rf ./dist

# --------------

dev: check-env
	@yarn start -s

build: check-env
	@yarn bundle -s
