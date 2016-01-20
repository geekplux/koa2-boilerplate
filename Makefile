.PHONY: test
test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--compilers js:babel-register \
		--harmony \
		--reporter spec \
		--require should \
		test/*.js
