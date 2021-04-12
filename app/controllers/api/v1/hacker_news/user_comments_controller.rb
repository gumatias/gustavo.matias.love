class Api::V1::HackerNews::UserCommentsController < ApplicationController
  def index
    raw_response = Faraday.get("https://hacker-news.firebaseio.com/v0/user/gumatias88.json")
    user_comments = JSON.parse(raw_response.body)

    render json: user_comments
  end
end
