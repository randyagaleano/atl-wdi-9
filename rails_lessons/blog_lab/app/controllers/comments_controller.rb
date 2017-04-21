class CommentsController < ApplicationController
  def index
  	@heading = 'ARTICLES COMMENTS'
  	@comments = Comment.all
  end
end
