class Api::V1::HackerNews::UserCommentsController < ApplicationController
  def index
    render json: { test: "funciona!" }
  end
end
