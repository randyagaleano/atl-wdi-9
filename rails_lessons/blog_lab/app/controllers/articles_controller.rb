class ArticlesController < ApplicationController
  def index
  	@heading = 'ARTICLES HERE BRUH'
  	@articles = Article.all
  end
end
