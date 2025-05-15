source "https://rubygems.org"

# Jekyll and core dependencies
gem "jekyll", "~> 4.3.2"
gem "webrick", "~> 1.8"  # Required for Ruby 3.0+

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-seo-tag", "~> 2.8.0"
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-relative-links", "~> 0.7.0"
  gem "jekyll-remote-theme", "~> 0.4.3"
end

# Development dependencies
group :development do
  gem "html-proofer", "~> 3.19.0"  # For testing your site
  gem "webrick", "~> 1.8"          # Required for Ruby 3.0+
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end