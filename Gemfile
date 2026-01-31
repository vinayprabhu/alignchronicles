source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Use the GitHub Pages meta-gem to ensure compatibility with the build server
gem "github-pages", "~> 232", group: :jekyll

# Windows and JRuby support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]

# Required for Jekyll on certain Ruby versions
gem "webrick", "~> 1.7"
