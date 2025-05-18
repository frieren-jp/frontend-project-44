.PHONY: install brain-games publish link lint brain-even brain-calc brain-prime brain-progression

# Установка зависимостей и настройка прав
install:
	npm ci
	chmod +x bin/brain-games.js bin/brain-even.js bin/brain-gcd.js bin/brain-progression.js

# Запуск игр
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

# Публикация и линкинг
publish:
	npm publish --dry-run

link:
	npm link

# Линтинг
lint:
	npx eslint .
	