class Api::V1::HackerNews::UserCommentsController < ApplicationController
  def index
    raw_response = Faraday.get("https://hacker-news.firebaseio.com/v0/user/gumatias88.json")
    user_profile = JSON.parse(raw_response.body)

    comments = user_profile["submitted"].map do |submission_id|
      raw_response = Faraday.get("https://hacker-news.firebaseio.com/v0/item/#{submission_id}.json")
      JSON.parse(raw_response.body)
    end

    render json: comments
  end
end
