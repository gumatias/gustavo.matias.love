class Api::V1::HackerNews::UserCommentsController < ApplicationController
  def index
    raw_response = Faraday.get("https://hacker-news.firebaseio.com/v0/user/gumatias88.json")
    user_profile = JSON.parse(raw_response.body)

    comments = user_profile["submitted"].map do |submission_id|
      raw_response = Faraday.get("https://hacker-news.firebaseio.com/v0/item/#{submission_id}.json")
      comment = JSON.parse(raw_response.body)

      if comment["parent"].present?
        raw_response = Faraday.get("https://hacker-news.firebaseio.com/v0/item/#{comment["parent"]}.json")
        comment["title"] = JSON.parse(raw_response.body)["title"]
      end

      comment
    end

    render json: comments
  end

  def show
    response = Faraday.get("https://hacker-news.firebaseio.com/v0/item/#{params[:id]}.json")
    submission = JSON.parse(response.body)
    if submission["parent"].present?
      response = Faraday.get("https://hacker-news.firebaseio.com/v0/item/#{submission["parent"]}.json")
      submission["title"] = JSON.parse(response.body)["title"]
    end

    render json: submission
  end
end
