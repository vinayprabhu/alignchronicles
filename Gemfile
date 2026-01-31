source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# This is the "Golden" gem for GitHub Pages. It manages Jekyll 3.9.x for you.
gem "github-pages", group: :jekyll

# Essential for Windows/JRuby environments
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Fixes the 'webrick' error common in newer Ruby versions
gem "webrick", "~> 1.7"
