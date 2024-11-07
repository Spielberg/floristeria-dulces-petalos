.DEFAULT_GOAL := help

start: ## Execute project on local environment
	@echo "🏃 Running project..."
	@npx vite --port 4000

lint: ## Run lint
	@echo "🧹 Running lint..."
	@npx eslint .

test: ## Run tests
	@echo "🧪 Running tests..."
	@npx vitest

coverage: ## Run tests with coverage
	@echo "🧪 Running tests with coverage..."
	@npx vitest --coverage

watch: ## Watch for changes and run lint
	@echo "👀 Watching for file changes..."
	find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -not -path "./node_modules/*" | entr make lint